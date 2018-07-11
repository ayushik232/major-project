import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import{ContactPage} from '../pages/contact/contact';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { YourDesignsPage } from '../pages/your-designs/your-designs';
import { SharePage } from '../pages/share/share';
import { RatingsPage } from '../pages/ratings/ratings';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { DetailsPage } from '../pages/details/details';
import { FinalPage } from '../pages/final/final';
import { WorkExpPage } from '../pages/work-exp/work-exp';
import { AcadPage } from '../pages/acad/acad';
import { ProjPage } from '../pages/proj/proj';
import { SkillPage } from '../pages/skill/skill';
import { CommonProvider } from '../providers/common/common';
import { CameraPage } from '../pages/camera/camera';
import { FormsModule } from '@angular/forms';
import { Camera,CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
import {HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,ContactPage,YourDesignsPage,SharePage,RatingsPage,LoginPage,SignupPage,
    DetailsPage,
    FinalPage,
    WorkExpPage,
    AcadPage,
    ProjPage,
    SkillPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, HomePage,ContactPage,YourDesignsPage,SharePage,RatingsPage,LoginPage,SignupPage,
    DetailsPage,
    FinalPage,
    WorkExpPage,
    AcadPage,
    ProjPage,
    SkillPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CommonProvider
  ]
})
export class AppModule {}
