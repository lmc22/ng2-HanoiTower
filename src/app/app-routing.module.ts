/*
 * This file is part of the ng2-HanoiTower project.
 *
 * (c) 2018 Luis Alberto <albertoluis0108@gmail.com>
 * https://github.com/fssAlbertoLuis/ng2-HanoiTower
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HanoiControllerComponent } from './hanoi/hanoi-controller.component';

const routes: Routes = [
  { path: '', redirectTo: '/hanoi', pathMatch: 'full' },
  { path: 'hanoi', component: HanoiControllerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}