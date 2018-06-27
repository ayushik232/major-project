import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtr: MenuController) {
    menuCtr.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goToOtherPage(){
    this.navCtrl.push(SignupPage);
  }
  goToMainPage(){
    this.navCtrl.setRoot(HomePage);
    
  }

}
