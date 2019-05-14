import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component2',
  //providers:[Service1],
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  num = 0;
  constructor(private myService1 : Service1) { }

  ngOnInit() {
    this.num = this.myService1.num;
  }

}
