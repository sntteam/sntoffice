import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detailpage } from './detailpage';

@NgModule({
  declarations: [
    Detailpage,
  ],
  imports: [
    IonicPageModule.forChild(Detailpage),
  ],
  exports: [
    Detailpage
  ]
})
export class DetailpageModule {}
