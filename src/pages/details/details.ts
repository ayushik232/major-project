import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinalPage } from './../final/final';
import { WorkExpPage } from '../work-exp/work-exp';
import { AcadPage } from '../acad/acad';
import { ProjPage } from '../proj/proj';
import { SkillPage } from '../skill/skill';
import { CameraPage } from '../camera/camera';
import { ActionSheetController } from 'ionic-angular'
import { Camera,CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import {HttpClient } from '@angular/common/http';
import { Http} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  imageURL
  aa;
  

  constructor(public cprovider:CommonProvider,public camera:Camera,public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController) {
  
  }


  goTofinalpage(){
 
let personDetail={objective:this.cprovider.getObjective(),name:this.cprovider.getObjective1(),address:this.cprovider.getObjective2(),
  Email:this.cprovider.getObjective3(),mobile:this.cprovider.getObjective4(),course:this.cprovider.getObjective5(),
  sc:this.cprovider.getObjective6(),marks:this.cprovider.getObjective7(),year:this.cprovider.getObjective8(),
  org:this.cprovider.getObjective9(),des:this.cprovider.getObjective10(),dur:this.cprovider.getObjective11(),
  role:this.cprovider.getObjective12(),details:this.cprovider.getObjective13(),description:this.cprovider.getObjective14()
  ,duration:this.cprovider.getObjective15(),role1:this.cprovider.getObjective16(),team:this.cprovider.getObjective17(),
  hobby:this.cprovider.getObjective18()}
    this.navCtrl.push(FinalPage,personDetail);
 
  }

  goToWorkExp()
  {
    this.navCtrl.push(WorkExpPage);
  }
    
  goToAcad()
  {
    this.navCtrl.push(AcadPage);
  }

  goToProj()
  {
    this.navCtrl.push(ProjPage);
  }

  goToSkill()
  {
    this.navCtrl.push(SkillPage);
  }
  goTocamera() {
    this.actionSheetCtrl.create({
      title: 'Set Profile Picture',
      buttons: [
        {
          text: 'Take a Photo',
          handler: () => {
            this.selectImageInCamera();
          }
        },
        {
          text: 'Choose from Gallery',
          handler: () => {
            this.selectImageInGallery();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).present();
  }
 
popover:CameraPopoverOptions={
  x:20,
  y:60,
  width:200,
  height:100,
  arrowDir:1
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }


  selectImageInGallery() {
    const CAMERA_OPTIONS: CameraOptions = {
      allowEdit: true,
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(CAMERA_OPTIONS).then((imageData) => {
      this.imageURL = `data:image/jpeg;base64,${imageData}`;
    }).catch(err => console.error(err));
  }

 
  selectImageInCamera()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
        this.camera.getPicture(options).then((imageData) => {
          this.imageURL = 'data:image/jpeg;base64,' + imageData;
           }).catch(err => console.log(err)
               // Handle error
                  );
                  //  this.camera.getPicture();
    }
    pername;
    peraddr;
    permail;
    permob;
    move()
    {
      this.pername=this.pername;
     this.peraddr=this.peraddr;
      this.permail=this.permail;
     this. permob=this.permob;
        this.cprovider.setObjective1(this.pername);
        this.cprovider.setObjective2(this.peraddr);
        this.cprovider.setObjective3(this.permail);
        this.cprovider.setObjective4(this.permob);
      this.aa="academics"
      console.log("my objective "+this.cprovider.getObjective1());
      console.log("my objective "+this.cprovider.getObjective2());
      console.log("my objective "+this.cprovider.getObjective3());
      console.log("my objective "+this.cprovider.getObjective4());
    }
    carrierObject;
    carrobj;
move1()
{
this.carrobj=this.carrobj;
this.cprovider.setObjective(this.carrobj);
  this.aa="Personal Details"
  console.log("my objective "+this.cprovider.getObjective());
  
}
move2()
{
  this.aa="Work Experience"
}
move3()
{
  this.aa="profile picture"
}
 move4()
 {
   this.aa="Projects"
 }  
 move5()
 {
   this.aa="Skills"
 }
  }

