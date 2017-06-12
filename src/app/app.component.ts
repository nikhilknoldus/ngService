import { Component } from '@angular/core';
import {DataService} from "./data.service";
import {Http } from '@angular/http';


@Component({
  selector: 'my-app',
  template: ` <button (click)="loadList()">Load Data</button> <br>
  <h1>Hi : {{userData.login}}</h1>
  <h4> Your Public Repos are: {{userData.public_repos}}</h4>
  `
})
export class AppComponent  { 
  constructor(private dataService: DataService){}

  userData:any=[];

   loadList(){
    this.dataService.getUserData().subscribe(
      (data) => this.userData = data
    )
  }
}
