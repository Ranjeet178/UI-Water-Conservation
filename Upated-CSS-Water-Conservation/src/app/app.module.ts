  import { RouterModule } from '@angular/router';
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule, Component } from '@angular/core';
  import { HttpModule } from '@angular/http';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  import { ApiService } from './api.service';
  import { LoginComponent } from './logIn.component';
  import { SignUpComponent } from './signUp.component';
  import { HomePageComponent } from './homepage.component';
  import { DailyHoursChartCommponent } from './dailyhourschart.component';

  import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
  import { ChartsModule } from 'ng2-charts';
  import { FormsModule,ReactiveFormsModule } from '@angular/forms';
  import {MatCardModule} from '@angular/material/card';
  import { BarChartComponent } from './bar.component';
  import { DoughnutComponent } from './Doughnut.component';
  //import { LineComponent } from './line.component';
  import { CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule } from 'angular-bootstrap-md';
  import { AboutComponent } from './about.component';
  import { UsersComponent } from './user.component';
  import { ProfileComponent } from './profile.component';
  import { TipsComponent } from './tips.component';
  import { FeedbackComponent} from './feedback.component';
  //import * as FusionCharts from 'fusioncharts';
  //import { FusionComponent } from './fusion.component';
 




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,LoginComponent,HomePageComponent,
    BarChartComponent,DoughnutComponent,DailyHoursChartCommponent,AboutComponent,
    UsersComponent,
    ProfileComponent,
    TipsComponent,
    FeedbackComponent//,
    //FusionComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule,
    BrowserAnimationsModule,HttpModule,FormsModule,ReactiveFormsModule,
    MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,MatButtonModule,ChartsModule,MatCardModule//,FusionCharts
    
  
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
