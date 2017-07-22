import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService} from '../../providers/todo-service';

/**
 * Generated class for the Mianpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mianpage',
  templateUrl: 'mianpage.html',
})
export class Mianpage {
  item:{};

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService) {
    this.loadTodos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mianpage');
  }

  loadTodos():void{
    let a={"AppUserId ": "1"};
    this.todoService.load3(a)
      .subscribe(data => {
          console.log('load data->' ,data)
          this.item=data.Message;
        },
        err => {
          console.log('Observable Error-> ',err)
        })
  }

}
