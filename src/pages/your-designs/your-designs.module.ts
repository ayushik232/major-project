import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourDesignsPage } from './your-designs';

@NgModule({
  declarations: [
    YourDesignsPage,
  ],
  imports: [
    IonicPageModule.forChild(YourDesignsPage),
  ],
})
export class YourDesignsPageModule {}
