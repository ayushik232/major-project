import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
/**
 * Generated class for the ProjPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proj',
  templateUrl: 'proj.html',
})
export class ProjPage {

  constructor(public cprovider:CommonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjPage');
  }
  projdet;
  projdes;
  projdur;
  projrole;
  projteam;
  move8()
  {
     this.projdet=this.projdet;
    this.projdes=this.projdes;
     this.projdur=this.projdur;
    this. projrole=this.projrole;
    this. projteam=this.projteam;
       this.cprovider.setObjective13(this.projdet);
       this.cprovider.setObjective14(this.projdes);
       this.cprovider.setObjective15(this.projdur);
       this.cprovider.setObjective16(this.projrole);
       this.cprovider.setObjective17(this.projteam);
     console.log("my objective "+this.cprovider.getObjective13());
     console.log("my objective "+this.cprovider.getObjective14());
     console.log("my objective "+this.cprovider.getObjective15());
     console.log("my objective "+this.cprovider.getObjective16());
     console.log("my objective "+this.cprovider.getObjective17());
    this.navCtrl.pop()
  }


}
