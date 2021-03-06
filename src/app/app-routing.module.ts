import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CurrentStatusComponent} from './current-status/current-status.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ActivityComponent} from './activity/activity.component';
import {SchedulesComponent} from './schedules/schedules.component';
import {OutagesComponent} from './outages/outages.component';
import {SitesComponent} from './sites/sites.component';
import {LedComponent} from './led/led.component';
import {NotificationsComponent} from './notifications/notifications.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'currentStatus', component: CurrentStatusComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'schedules', component: SchedulesComponent},
  {path: 'outages', component: OutagesComponent},
  {path: 'sites', component: SitesComponent},
  {path: 'led', component: LedComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: '**', pathMatch: 'full', redirectTo: '/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
