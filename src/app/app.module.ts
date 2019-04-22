import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';
import {CurrentStatusComponent} from './current-status/current-status.component';
import { ActivityComponent } from './activity/activity.component';
import { SchedulesComponent } from './schedules/schedules.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CurrentStatusComponent,
    ActivityComponent,
    SchedulesComponent
  ],
  imports: [
    BrowserModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
