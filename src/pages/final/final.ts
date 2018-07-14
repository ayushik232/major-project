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
  Address;
  email;
  Mobile;
  Course;
  School;
  Mark;
  Year;
  Des;
  Org;
  Dur;
  Role;
  Details;
  desp;
  duration;
  Role1;
  Team;
  Hobby;
  ionViewDidEnter()
  {
    console.log("inside did enter");
    this.perobject=this.navParams.get('objective');
this.Name=this.navParams.get('name');
this.Address=this.navParams.get('address');
this.email=this.navParams.get('Email');
this.Mobile=this.navParams.get('mobile');
this.Course=this.navParams.get('course');
this.School=this.navParams.get('sc');
this.Mark=this.navParams.get('marks');
this.Year=this.navParams.get('year');
this.Org=this.navParams.get('org');
this.Des=this.navParams.get('des');
this.Dur=this.navParams.get('dur');
this.Role=this.navParams.get('role');
this.Details=this.navParams.get('details');
this.desp=this.navParams.get('description');
this.duration=this.navParams.get('duration');
this.Role1=this.navParams.get('role1');
this.Team=this.navParams.get('team');
this.Hobby=this.navParams.get('hobby');
 
 
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
