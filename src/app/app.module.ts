import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule, MatSlideToggleModule, MatCardModule, MatSnackBarModule
} from '@angular/material';
import {CurrentStatusComponent} from './current-status/current-status.component';
import { ActivityComponent } from './activity/activity.component';
import {CronDialogComponent, SchedulesComponent} from './schedules/schedules.component';
import {FormsModule} from '@angular/forms';
import { OutagesComponent } from './outages/outages.component';
import {SiteDialogComponent, SitesComponent} from './sites/sites.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CurrentStatusComponent,
    ActivityComponent,
    SchedulesComponent,
    CronDialogComponent,
    OutagesComponent,
    SitesComponent,
    SiteDialogComponent
  ],
  entryComponents: [CronDialogComponent, SiteDialogComponent],
  imports: [
    BrowserModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule, MatSlideToggleModule,
    AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
