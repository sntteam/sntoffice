import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {TodoService} from "../../providers/todo-service";
import {UserInfoService} from "../../providers/UserInfoService";
import {User} from "../../model/User";
import {UserRsp} from "../../model/UserRsp";
import {StorageService} from "../../providers/StorageService";
import {UserInfoData} from "../../model/UserInfoData";
import {Scope} from "@angular/core/src/profile/wtf_impl";
/**
 * Generated class for the Loginpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html',
})
export class Loginpage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public todoService: TodoService, public  userinfoserve: UserInfoService,private storageservce: StorageService) {

  }


  loginuser : UserRsp;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Loginpage');


  }



  logIn(username, password) {
    // alert("进入");
    console.log(username.value);
    console.log(password.value);

    this.loadTodos(username.value, password.value);
  }

  loadTodos(name, pwd): void {
    let a = {"LoginName": name, "Pwd": pwd};
    this.todoService.load(a)
      .subscribe(data => {
          console.log('load data->', data);
          // this.navCtrl.push(Mianpage);
          if (data.IsSucess) {
            this.filldata(data.Message);
          }

        },
        err => {
          console.log('Observable Error-> ', err);
        })
  }

  filldata(datas : UserRsp) {
    // this.storageservce.write('user',datas);
    console.log(datas);
    // console.log(datas[0].AppLoginName);
    // this.loginuser = datas;
    if (datas.RtnCode=="9999"){//接口返回成功
      this.loginuser = datas;

    }else{
      this.loginuser = datas;
      console.log(typeof this.loginuser);
    }
  }
}
