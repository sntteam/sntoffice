import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService} from '../../providers/todo-service';

/**
 * Generated class for the Deleteuserpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-deleteuserpage',
  templateUrl: 'deleteuserpage.html',
})
export class Deleteuserpage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService) {

  }

  ionViewDidLoad(AppUserId) {
    console.log('ionViewDidLoad Deleteuserpage');
  }

  loadTodos(AppUserId):void{
    let a={
      "Type":"3",
      "AppUserId":AppUserId.value,
      "AppUserName":"",
      "AppLoginName":"",
      "AppPassWord":"",
      "AppUserPostion":"",
      "AppUserIsvalid":""
    };
    this.todoService.load2(a)
      .subscribe(data => {
          console.log('load data->' ,data)
        },
        err => {
          console.log('Observable Error-> ',err)
        })
  }

}
