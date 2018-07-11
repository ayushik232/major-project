import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the AcadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acad',
  templateUrl: 'acad.html',
})
export class AcadPage {
  aa;
  constructor(public cprovider:CommonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcadPage');
  }
  acadco;
  acadsc;
  acadmar;
  acadyear;
  move6()
  {
    this.acadco=this.acadco;
    this.acadsc=this.acadsc;
     this.acadmar=this.acadmar;
    this. acadyear=this.acadyear;
       this.cprovider.setObjective5(this.acadco);
       this.cprovider.setObjective6(this.acadsc);
       this.cprovider.setObjective7(this.acadmar);
       this.cprovider.setObjective8(this.acadyear);
  
     
    this.navCtrl.pop()
    console.log("my objective "+this.cprovider.getObjective5());
    console.log("my objective "+this.cprovider.getObjective6());
    console.log("my objective "+this.cprovider.getObjective7());
    console.log("my objective "+this.cprovider.getObjective8());
  }

}
