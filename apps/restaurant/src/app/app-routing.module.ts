import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { authRoutes } from '@dc/auth';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dishes' },
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'dishes',
    loadChildren: () =>
      import('@dc/dishes').then((module) => module.DishesModule)
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@dc/products').then((module) => module.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
