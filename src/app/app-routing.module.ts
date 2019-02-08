import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from '../app/admin/admin.component';

const routes: Routes = [
  { path: 'AdminComponent', component: AdminComponent },
  { path: 'product', component: ProductsComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
