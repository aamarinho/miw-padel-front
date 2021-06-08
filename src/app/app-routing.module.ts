import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/not-found/not-found.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)},
  {path: 'paddle', loadChildren: () => import('./paddle/paddle.module').then(module => module.PaddleModule)},
  {path: '404', pathMatch: 'full', component: NotFoundComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
