/**
 * Created by Administrator on 2017/7/19.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import {Storage, LocalStorage} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { HttpService } from "./HttpService";
import { StorageService } from "./StorageService";

@Injectable()
export class UserInfoService {
  API_URL = "http://192.168.0.12:12580/?type=4100";
  constructor(
    private http: Http,
    private httpService: HttpService,
    private storageService:StorageService) { }

  login(user) {
    var url = this.API_URL;
    return this.httpService.postBody(url, user);
  }





}
