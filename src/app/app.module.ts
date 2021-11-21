import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import {TestCmpComponent} from "./_components/test-cmp/test-cmp.component";

import { MaterialModule } from "./_modules/material/material.module";
import { AppRoutingModule } from "./app-routing.module";
import { TaskComponent } from './_components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    TestCmpComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
