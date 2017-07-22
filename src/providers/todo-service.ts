import {Injectable} from '@angular/core';
//import {Http, Headers} from '../../node_modules/@angular/http/http.d';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

//import {Todo} from '../../todo.ts';

@Injectable(

)
export class TodoService {
  todosUrl = "http://192.168.0.12:12580/?type=4100";
  todosUrl2 = "http://192.168.0.12:12580/?type=4101";
  todosUrl3 = "http://192.168.0.12:12580/?type=4102";
  todosUrl4 = "http://192.168.0.12:12580/?type=4103";
  todosUrl5 = "http://192.168.0.12:12580/?type=4104";
  todosUrl6 = "http://192.168.0.12:12580/?type=4105";
  todosUrl7 = "http://192.168.0.12:12580/?type=4106";
  todosUrl8 = "http://192.168.0.12:12580/?type=4107";
  todosUrl9 = "http://192.168.0.12:12580/?type=4108";
  todosUrl10 = "http://192.168.0.12:12580/?type=4109";

  todosUrl11 = "http://192.168.0.12:12580/?type=4110";

  todosUrl12 = "http://192.168.0.12:12580/?type=4000";
  todosUrl13 = "http://192.168.0.12:12580/?type=4001";
  todosUrl14 = "http://192.168.0.12:12580/?type=4002";
  todosUrl15 = "http://192.168.0.12:12580/?type=4003";
  todosUrl16 = "http://192.168.0.12:12580/?type=4004";

  constructor(public http: Http) {

  }

  // Get all todos

  load12(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl12, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load13(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl13, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load14(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl14, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load15(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl15, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load16(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl16, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    //let body:string = JSON.stringify({LoginName: todo[0],Pwd: todo[1]});
    let headers:Headers = new Headers({'Content-Type': 'application/json'});


    return this.http.post(this.todosUrl, todo,{headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load2(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl2, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load3(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl3, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load4(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl4, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load5(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl5, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load6(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl6, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load7(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl7, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load8(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl8, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load9(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl9, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load10(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl10, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  load11(todo: {}): Observable<any> {
    console.log('add item-> ', todo)
    let headers:Headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.todosUrl11, todo, {headers: headers})
      .map(res => res.json())
      .catch(this.handleError);
  }

  // Handle Observable Error with type return
  handleError(error):Observable<Error> {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');

  }

}
