import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
/**
 * Generated class for the WorkExpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work-exp',
  templateUrl: 'work-exp.html',
})
export class WorkExpPage {

  constructor(public cprovider:CommonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkExpPage');
  }
  exorg;
  exdes;
  exdur;
  exrole;
  move7()

  {
    this.exorg=this.exorg;
    
    this.exdes=this.exdes;
     this.exdur=this.exdur;
    this.exrole=this.exrole;
       this.cprovider.setObjective9(this.exorg);
       this.cprovider.setObjective10(this.exdes);
       this.cprovider.setObjective11(this.exdur);
       this.cprovider.setObjective12(this.exrole);
     
     

    this.navCtrl.pop()
  }

}
