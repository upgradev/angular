import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "Jonh";
  age = 100;
  person = {
    firstName: "john",
    lastName: "cena",
    age: 50,
    address: "route 60"
  }

  constructor() { }

  ngOnInit() {
  }

}
