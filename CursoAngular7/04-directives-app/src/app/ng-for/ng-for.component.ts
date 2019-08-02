import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [
    "Ana", "John", "Maria", "Rose"
  ]

  cities = [
    {
      name: "São Paulo", state: "SP"
    },
     {
      name: "Campo Grande", state: "MS"
    },
    {
      name: "Rio de Janeiro", state: "RJ"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
