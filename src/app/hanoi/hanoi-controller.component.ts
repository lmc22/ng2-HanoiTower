/*
 * This file is part of the ng2-HanoiTower project.
 *
 * (c) 2018 Luis Alberto <albertoluis0108@gmail.com>
 * https://github.com/fssAlbertoLuis/ng2-HanoiTower
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 import { Component } from '@angular/core';
import { HanoiService } from '../hanoi/hanoi.service';

@Component({
  selector: 'hanoi-controller',
  templateUrl: './hanoi-controller.component.html',
  styleUrls: ['./hanoi-controller.component.css']
})
export class HanoiControllerComponent {

  calculating = false;
  hanoi = null;
  error = false;

  constructor(private hanoiService: HanoiService) {}

  calculate(discs, mode): void {
    if (discs && mode) {
      this.calculating = false;
      this.error = false;
      if (discs && discs > 0) {
        this.hanoiService.calcular(discs)
                        .then(solution => this.receiveSolution(solution, discs))
                        .catch(error => this.error = true);
      }
    }
  }
  receiveSolution(solution: any, discs: number): void {
    if (solution.error) {
      this.error = true;
    } else {
      this.hanoi = solution;
      console.log('The number of discs to be solved is : ' + discs);
      this.calculating = true;
    }    
  }
  reset(): void {
    this.calculating = false;
    this.hanoi = null;
    this.error = false;
  }
}