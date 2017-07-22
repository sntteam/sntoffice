import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mianpage } from './mianpage';

@NgModule({
  declarations: [
    Mianpage,
  ],
  imports: [
    IonicPageModule.forChild(Mianpage),
  ],
  exports: [
    Mianpage
  ]
})
export class MianpageModule {}
