import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';
import { Service2 } from '../../service2.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  //providers:[Service1]
})
export class Component1Component implements OnInit {
  num = 0;
  text = "";
  constructor(private myService1 : Service1, private myService2 : Service2) { }

  ngOnInit() {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }

}
