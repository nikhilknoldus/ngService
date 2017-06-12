/**
 * Created by knoldus on 3/31/17.
 */

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

import  {Component, Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';

@Injectable()
export  class DataService {

  constructor(private http: Http){}

  getUserData(){
      return this.http.get('/app/trainingData.json').map(
        (response: Response) => response.json()
      )
    .catch(this._errorHandler);
  }

  _errorHandler(error: Response){
    console.error("Problem in service  :::: " + error);
    return Observable.throw(error || "Server Error");
  }
}
