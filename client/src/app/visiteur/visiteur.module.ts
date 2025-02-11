import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProgrammeComponent } from './programme/programme.component';
import { MapComponent } from './map/map.component';
import { FaqComponent } from './faq/faq.component';
import {RouterModule, Routes} from "@angular/router";


export const visiteurRoutes : Routes = [
  {path: '', redirectTo: 'HomeComponent', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'programme', component: ProgrammeComponent},
  {path: 'map', component: MapComponent},
  {path: 'faq', component: FaqComponent},
  {path: '**', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    ProgrammeComponent,
    MapComponent,
    FaqComponent
  ],
  imports: [
    RouterModule.forChild(visiteurRoutes),
    CommonModule
  ]
})
export class VisiteurModule { }
