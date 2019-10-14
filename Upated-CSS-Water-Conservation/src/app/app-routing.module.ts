import { LineComponent } from './line.component';
import { BarChartComponent } from './bar.component';
import { LoginComponent } from './logIn.component';
import { HomePageComponent } from './homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { DoughnutComponent } from './Doughnut.component';
import { SignUpComponent } from './signUp.component';
import { AboutComponent } from './about.component';
import { UsersComponent } from './user.component';
import { ProfileComponent } from './profile.component';
import { TipsComponent } from './tips.component';
import { FeedbackComponent } from './feedback.component';
//import { FusionComponent } from './fusion.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  {path: "signUp", component:SignUpComponent},
  {path: 'homepage', component: HomePageComponent},
  {path: 'dashboard', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: "barchart", component:BarChartComponent},
  {path: "dough", component: DoughnutComponent},
  //{path: "line", component:LineComponent},
  {path: "about", component: AboutComponent},
  {path: "user", component:UsersComponent},
  {path: "profile/:id", component:ProfileComponent},
  {path: "tips",component:TipsComponent},
  {path: "feedback", component:FeedbackComponent},
  //{path: "fusion", component: FusionComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
