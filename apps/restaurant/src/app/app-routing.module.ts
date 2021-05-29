import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authRoutes } from '@dc/auth';

const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'dishes',
    loadChildren: () => import('@dc/dishes').then((module) => module.DishesModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
