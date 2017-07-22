import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Binduserpage } from './binduserpage';

@NgModule({
  declarations: [
    Binduserpage,
  ],
  imports: [
    IonicPageModule.forChild(Binduserpage),
  ],
  exports: [
    Binduserpage
  ]
})
export class BinduserpageModule {}
