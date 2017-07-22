import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Listpage } from './listpage';

@NgModule({
  declarations: [
    Listpage,
  ],
  imports: [
    IonicPageModule.forChild(Listpage),
  ],
  exports: [
    Listpage
  ]
})
export class ListpageModule {}
