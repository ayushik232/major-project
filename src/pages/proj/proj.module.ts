import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjPage } from './proj';

@NgModule({
  declarations: [
    ProjPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjPage),
  ],
})
export class ProjPageModule {}
