/*
 * This file is part of the ng2-HanoiTower project.
 *
 * (c) 2018 Luis Alberto <albertoluis0108@gmail.com>
 * https://github.com/fssAlbertoLuis/ng2-HanoiTower
 * 
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

 import { NgModule }                         from '@angular/core';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdToolbarModule }                  from '@angular/material';
import { MdChipsModule }                    from '@angular/material';
import { MdInputModule }                    from '@angular/material';
import { MdSelectModule }                   from '@angular/material';
import { MdTooltipModule }                  from '@angular/material';
import { DragScrollModule }                 from 'angular2-drag-scroll';
import { MdProgressBarModule }              from '@angular/material';
import { MdMenuModule }                     from '@angular/material';
import { MdGridListModule }                 from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdTableModule } from '@angular/material';


@NgModule({
  imports: [],
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdChipsModule,
    MdInputModule,
    MdSelectModule,
    MdTooltipModule,
    DragScrollModule,
    MdProgressBarModule,
    MdMenuModule,
    MdGridListModule,
    MdDialogModule,
    MdTableModule
  ]
})
export class MaterialModule {}