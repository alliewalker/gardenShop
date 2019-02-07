import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAndNavComponent } from './home-and-nav/home-and-nav.component';

const routes: Routes = [
  {path: '', redirectTo: '*', pathMatch: 'full'},
  {path: 'home-and-nav', component: HomeAndNavComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
