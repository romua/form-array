import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { DashboardComponent } from './admin-home-page/dashboard/dashboard.component';
import { ProfileSettingsComponent } from './admin-home-page/profile-settings/profile-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomePageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'profile-settings',
        component: ProfileSettingsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
