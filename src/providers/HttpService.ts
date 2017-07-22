/**
 * Created by Administrator on 2017/7/19.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { StorageService } from "./StorageService";
import { UserInfoData } from "./../model/UserInfoData";

@Injectable()
export class HttpService {
  myInfoLocal: any;
  local: Storage;
  constructor(
    private http: Http,
    private storageService: StorageService) {
    //this.local = new Storage(LocalStorage);
  }


  public postBody(url: string, paramObj: any) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, paramObj, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }



  private handleSuccess(result) {
    if (result && !result.IsSucess) {//由于和后台约定好,所有请求均返回一个包含success,msg,data三个属性的对象,所以这里可以这样处理
    }
    return result;
  }

  handleError1(error):Observable<Error> {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');

  }

  private handleError(error: Response | any) {
    let msg = '请求失败';
    if (error.status == 0) {
      msg = '请求地址错误';
    }
    if (error.status == 400) {
      msg = '请求无效';
      console.log('请检查参数类型是否匹配');
    }
    if (error.status == 404) {
      msg = '请求资源不存在';
      console.error(msg+'，请检查路径是否正确');
    }
    console.log(error);
    return {success: false, msg: msg};
  }




}
