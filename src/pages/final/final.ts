import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from './../details/details';
import { CommonProvider } from '../../providers/common/common';
/**
 * Generated class for the FinalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {

  constructor(public cprovider:CommonProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalPage');

  }
  perobject;
  Name;
  ionViewDidEnter()
  {
    console.log("inside did enter");
    this.perobject=this.navParams.get('objective');
this.Name=this.navParams.get('name');
    console.log(this.perobject);
    
  }

  goTodetailpage(){
    this.navCtrl.push(DetailsPage);
    
  }
  objective;
  getObjective()
    {
    return this.objective;
    }
 
  display()
  {
     
    console.log("my objective "+this.cprovider.getObjective());
 

  }

}
