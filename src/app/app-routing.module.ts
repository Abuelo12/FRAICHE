import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  { path: 'damas', loadChildren: './damas/damas.module#DamasPageModule' },
  { path: 'caballeros', loadChildren: './caballeros/caballeros.module#CaballerosPageModule' },
  { path: 'principes', loadChildren: './principes/principes.module#PrincipesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
