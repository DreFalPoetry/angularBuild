import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
//
import {HeroesComponent} from './heroes/heroes.component';
//添加仪表盘路由
import {DashboardComponent} from './dashboard/dashboard.component';
//
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

const routers: Routes =[
    {path:'heroes',component:HeroesComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    { path: 'detail/:id', component: HeroDetailComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routers)
    // CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { 
  
}
