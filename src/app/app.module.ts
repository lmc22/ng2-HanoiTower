import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { CountoModule } from 'angular2-counto';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HanoiComponent } from './hanoi/hanoi.component';
import { HanoiControllerComponent } from './hanoi/hanoi-controller.component';

import { HanoiService } from './hanoi/hanoi.service';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HanoiComponent,
    HanoiControllerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    CountoModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HanoiService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
