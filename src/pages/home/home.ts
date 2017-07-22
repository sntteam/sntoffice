import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Deleteuserpage } from '../deleteuserpage/deleteuserpage';
import { Binduserpage } from '../binduserpage/binduserpage';
import { Detailpage } from '../detailpage/detailpage';
import { Listpage } from '../listpage/listpage';
import { Mianpage } from '../mianpage/mianpage';
import { Register } from '../register/register';
import { Loginpage } from '../loginpage/loginpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toDeleteuserpage(){
    console.log('点我了');
    this.navCtrl.push(Deleteuserpage,{
      item1:'ios-newPage'
    });}
  toBinduserpage(){
    console.log('点我了');
    this.navCtrl.push(Binduserpage,{
      item1:'ios-newPage'
    });}
  toDetailpage(){
    console.log('点我了');
    this.navCtrl.push(Detailpage,{
      item1:'ios-newPage'
    });}
  toListpage(){
    console.log('点我了');
    this.navCtrl.push(Listpage,{
      item1:'ios-newPage'
    });}
  toMianpage(){
    console.log('点我了');
    this.navCtrl.push(Mianpage,{
      item1:'ios-newPage'
    });}
  toRegister(){
    console.log('点我了');
    this.navCtrl.push(Register,{
      item1:'ios-newPage'
    });}
  toLoginpage(){
    console.log('点我了');
    this.navCtrl.push(Loginpage,{
      item1:'ios-newPage'
    });}
}
