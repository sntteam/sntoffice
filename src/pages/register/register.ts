import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService} from '../../providers/todo-service';
import { Listpage } from '../listpage/listpage';


/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

  adduser(AppUserName, AppLoginName, AppPassWord, AppUserPostion, AppUserIsvalid){
    this.loadTodos(AppUserName.value,AppLoginName.value,AppPassWord.value,AppUserPostion.value,AppUserIsvalid.value);
  }

  loadTodos(AppUserName, AppLoginName, AppPassWord, AppUserPostion, AppUserIsvalid):void{
    let a={
      "Type":"1",
      "AppUserId":"",
      "AppUserName":AppUserName,
      "AppLoginName":AppLoginName,
      "AppPassWord":AppPassWord,
      "AppUserPostion":AppUserPostion,
      "AppUserIsvalid":AppUserIsvalid
    };
    this.todoService.load2(a)
      .subscribe(data => {
          console.log('load data->' ,data)
          console.log("itemTapped");
          this.navCtrl.push(Listpage);
        },
        err => {
          console.log('Observable Error-> ',err)
        })
  }

}
