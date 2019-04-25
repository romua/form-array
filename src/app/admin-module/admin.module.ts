import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { DashboardComponent } from './admin-home-page/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileSettingsComponent } from './admin-home-page/profile-settings/profile-settings.component';
import { UsersComponent } from './admin-home-page/dashboard/users/users.component';
import { GlobalSettingsComponent } from './admin-home-page/dashboard/global-settings/global-settings.component';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminHomePageComponent, DashboardComponent, ProfileSettingsComponent, UsersComponent, GlobalSettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
