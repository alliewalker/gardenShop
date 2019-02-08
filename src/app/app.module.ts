import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AboutComponent } from './about/about.component';
=======
import { ProductsComponent } from './products/products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

import { AdminComponent } from './admin/admin.component';

<<<<<<< HEAD

>>>>>>> c1f5b0d2180eafb054bca8cc1840692398e1e22f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AboutComponent
=======
    ProductsComponent,
    DeleteProductComponent

>>>>>>> c1f5b0d2180eafb054bca8cc1840692398e1e22f
=======
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductsComponent,
    DeleteProductComponent
>>>>>>> cfdb856d0a37ad37f13ea349903d6cadc10099ed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }