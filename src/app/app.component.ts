import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Nav} from 'ionic-angular';
import { ContactPage } from '../pages/contact/contact';
import { YourDesignsPage } from '../pages/your-designs/your-designs';
import { SharePage } from '../pages/share/share';
import { RatingsPage } from '../pages/ratings/ratings';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { DetailsPage } from '../pages/details/details';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = LoginPage;
  pages:Array<{
    title:string,
    icon:string,
    md:string,
    Component:any}>;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages=[
      {
        title:'Home',
        icon:'ion-bulb',
        md:'md-bulb',
        Component:HomePage
      },
      {
        title:'Contact',
        icon:'ion-bulb',
        md:'md-bulb',
        Component:ContactPage
      },
      {
        title:'your-designs',
        icon:'ion-bulb',
        md:'md-bulb',
        Component:YourDesignsPage
      },
      {
        title:'Share',
        icon:'ion-bulb',
        md:'md-bulb',
        Component:SharePage
      },
      {
        title:'Ratings',
        icon:'ion-bulb',
        md:'md-bulb',
        Component:RatingsPage
      }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page)
  {
    this.nav.setRoot(page.Component);
  }
}

