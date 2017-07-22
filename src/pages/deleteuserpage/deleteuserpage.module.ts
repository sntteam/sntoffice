import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Deleteuserpage } from './deleteuserpage';

@NgModule({
  declarations: [
    Deleteuserpage,
  ],
  imports: [
    IonicPageModule.forChild(Deleteuserpage),
  ],
  exports: [
    Deleteuserpage
  ]
})
export class DeleteuserpageModule {}
