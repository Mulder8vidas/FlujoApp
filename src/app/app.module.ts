import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Chart, registerables } from "chart.js";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './pages/home-app/home-app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
