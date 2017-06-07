import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import 'hammerjs';
@NgModule({
  imports:      [ BrowserModule , BrowserAnimationsModule , NoopAnimationsModule , MaterialModule , FormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
