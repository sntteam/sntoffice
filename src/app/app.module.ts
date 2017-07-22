import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { Deleteuserpage } from '../pages/deleteuserpage/deleteuserpage';
import { Binduserpage } from '../pages/binduserpage/binduserpage';
import { Detailpage } from '../pages/detailpage/detailpage';
import { Listpage } from '../pages/listpage/listpage';
import { Mianpage } from '../pages/mianpage/mianpage';
import { Register } from '../pages/register/register';
import { Loginpage } from '../pages/loginpage/loginpage';
import {TodoService} from '../providers/todo-service';
import {HttpService} from "../providers/HttpService";
import {StorageService} from "../providers/StorageService";
import {UserInfoService} from "../providers/UserInfoService";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Deleteuserpage,
    Binduserpage,
    Detailpage,
    Listpage,
    Mianpage,
    Register,
    Loginpage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Deleteuserpage,
    Binduserpage,
    Detailpage,
    Listpage,
    Mianpage,
    Register,
    Loginpage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,HttpService,StorageService,UserInfoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
