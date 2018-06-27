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



@NgModule({
  declarations: [
    MyApp,
    HomePage,ContactPage,YourDesignsPage,SharePage,RatingsPage,LoginPage,SignupPage,
    DetailsPage,
    FinalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, HomePage,ContactPage,YourDesignsPage,SharePage,RatingsPage,LoginPage,SignupPage,
    DetailsPage,
    FinalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
