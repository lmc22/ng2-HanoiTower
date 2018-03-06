/*
 * This file is part of the ng2-HanoiTower project.
 *
 * (c) 2018 Luis Alberto <albertoluis0108@gmail.com>
 * https://github.com/fssAlbertoLuis/ng2-HanoiTower
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HanoiService {

  private url = 'http://localhost/hanoi.php';

  constructor(private http: Http){}

  calcular(discs: number): Promise<any> {
    const url = `${this.url}?discs=${discs}`;
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json())
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}