import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { AppComponent }  from './app.component';
import 'hammerjs';
@NgModule({
  imports:      [ BrowserModule , BrowserAnimationsModule , NoopAnimationsModule , MaterialModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
