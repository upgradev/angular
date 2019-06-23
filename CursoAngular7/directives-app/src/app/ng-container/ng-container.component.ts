import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    {login: "bob", role: "admin", lastlogin: new Date('2/1/2019')},
    {login: "ana", role: "user", lastlogin: new Date('10/2/2019')},
    {login: "carla", role: "admin", lastlogin: new Date('11/111/2018')},
    {login: "maria", role: "user", lastlogin: new Date('12/1/2019')}
  ]

  constructor() { }

  ngOnInit() {
  }

}
