import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {path:"about", component: AboutComponent },
]
;

=======
import { ProductsComponent } from './products/products.component';

import { AdminComponent } from '../app/admin/admin.component';

const routes: Routes = [
  { path: 'AdminComponent', component: AdminComponent },
  { path: 'product', component: ProductsComponent}]
>>>>>>> c1f5b0d2180eafb054bca8cc1840692398e1e22f

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
