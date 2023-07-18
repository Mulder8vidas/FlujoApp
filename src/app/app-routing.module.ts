import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAppComponent} from "./pages/home-app/home-app.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes =[
  {path:'',component:HomeAppComponent},
  {path:'dashboard',component:DashboardComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
