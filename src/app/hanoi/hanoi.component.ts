/*
 * This file is part of the ng2-HanoiTower project.
 *
 * (c) 2018 Luis Alberto <albertoluis0108@gmail.com>
 * https://github.com/fssAlbertoLuis/ng2-HanoiTower
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 import { Component, Input, OnChanges } from '@angular/core';
import { Disc } from "./disc";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Component({
  selector: 'hanoi',
  templateUrl: 'hanoi.component.html',
  styleUrls: ['hanoi.component.css']
})
export class HanoiComponent implements OnChanges{

  discs: Disc[] = [];
  counting = 0;
  calculating = true;
  stepProgress = 0;
  percent = 0;
  duration = 0;
  state: string;
  manual = false;
  i_general = 0;
  storedMovements: string[] = [];
  pines: any = {
    0: [],
    1: [],
    2: []
  };

  background: string[] = [
    '#ff5151', '#5050e8', '#ffc04b', '#131c73', '#b15353',
    '#f1ef28', '#ff009f', '#ba00ff', '#66c5b1', '#ffa5ee'
  ];
  sbackground: string[] = [
    '#fb6969', '#6262e8', '#fdc865', '#262e82', '#bf6b6b',
    '#f5f354', '#f934af', '#bb37ec', '#77cebb', '#fbb3ed'
  ]
  private dif = {
    width: 1,
    left: .5,
    background: 1.2
  };

  private val_base = {
    width: 13,
    height: 1.2,
    background: 3.70,
    left: 2.7
  };

  @Input() mov: any;
  @Input() ndiscs: number;
  @Input() mode: string;

  ngOnChanges(changes): void {
    const movements = changes['mov'];
    if (movements && (movements.previousValue != movements.currentValue)) {
      this.start();
      this.manual = this.mode === 'manual';
    }
  }

  private start(): void {
    this.discs = [];
    this.stepProgress = 100 / this.mov.n_movements;
    for (let i = 0; i < this.ndiscs; i++) {
      const disc = {
        size: this.ndiscs - i,
        background: `repeating-linear-gradient(
          45deg,
          ` + this.background[i] + `,
          ` + this.background[i] + ` 10px,
          ` + this.sbackground[i] + ` 10px,
          ` + this.sbackground[i] + ` 20px
        )`,
        height: this.val_base.height.toString() + 'em',
        width: (this.val_base.width - (i * this.dif.width)).toString() + 'em',
        left: (this.val_base.left + (i * this.dif.left)).toString() + 'em',
        bottom: (this.val_base.background + (i * this.dif.background)).toString() + 'em',
        position: 'absolute'
      } as Disc;
      this.discs.push(disc);
      this.pines[0] = this.discs;
    }
    if (this.mode === 'auto') {
      this.determinateDuration();
      this.calculate(0);
    } else {
      this.state = this.determinateState();
    }
  }

  private calculateStep(): void {
    if (this.manual && this.calculating) {
      if (this.i_general < this.mov.movements.length) {
        this.move(this.mov.movements[this.i_general]);
        this.percent += this.stepProgress;
        this.i_general++;
      }
      this.calculating = this.i_general < this.mov.movements.length;
    }
  }

  private calculate(i: number): void {
    if (!this.manual) {
      const delay = 1050 - this.ndiscs * 100;
      if (i < this.mov.movements.length) {
        const delayedObservable = Observable.of(this.mov.movements[i])
                                            .delay(delay);
        delayedObservable.subscribe(data => this.nextCalc(data, i + 1));
      } else {
        this.calculating = false;
      }
    }
  }

  private nextCalc(movement: any, i: number): void {
    this.move(movement);
    this.calculate(i);
  }

  private move(movement: any): void {
    this.counting++;
    const from = movement.from - 1;
    const to = movement.to - 1;
    const last_index = this.pines[from].length - 1;
    const moving = this.pines[from][last_index];
   this.insertDisc(moving, to);
    this.pines[from].splice(this.pines[from].length - 1, 1);
    this.state = this.determinateState();
  }

  private insertDisc(disc: Disc, pine_index: number): void {
    const diferencial = this.pines[pine_index].length;
    disc.bottom = (this.val_base.background + (diferencial * this.dif.background)).toString() + 'em';
    this.pines[pine_index].push(disc);
  }

  private determinateDuration(): void {
    const delay = 1050 - this.ndiscs * 100;
    this.duration = (delay / 1000) * this.mov.n_movements;
  }

  private determinateState(): string {
    let state = 'A';
    for (let i = this.pines[0].length - 1; i >= 0; i--) {
      state += this.pines[0][i].size;
    }
    state += 'B';
    for (let i = this.pines[1].length - 1; i >= 0; i--) {
      state += this.pines[1][i].size;
    }
    state += 'C';
    for (let i = this.pines[2].length - 1; i >= 0; i--) {
      state += this.pines[2][i].size;
    }
    this.storedMovements.push(state);
    return state;
  }
}
