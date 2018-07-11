import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcadPage } from './acad';

@NgModule({
  declarations: [
    AcadPage,
  ],
  imports: [
    IonicPageModule.forChild(AcadPage),
  ],
})
export class AcadPageModule {}
