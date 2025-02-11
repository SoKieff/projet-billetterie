import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {RouterModule, Routes} from "@angular/router";

export const adminRoutes : Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeAdminComponent},
  {path: '**', component: HomeAdminComponent}
]

@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
      RouterModule.forChild(adminRoutes),
    CommonModule
  ]
})
export class AdminModule { }
