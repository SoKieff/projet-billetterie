import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visiteur',
    pathMatch: 'full'
  },
  {
    path: 'visiteur',
    loadChildren: () => import('./visiteur/visiteur.module').then(m => m.VisiteurModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
