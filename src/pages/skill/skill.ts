import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the SkillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {

  constructor(public cprovider:CommonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillPage');
  }
goToSelf()
{
  this.navCtrl.push(SkillPage);
}
skillp;
move9()
{
  this.skillp=this.skillp;
       this.cprovider.setObjective13(this.skillp);
      
     
  this.navCtrl.pop()
}

}
