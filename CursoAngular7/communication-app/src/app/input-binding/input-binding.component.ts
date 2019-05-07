import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name:string;
  @Input() lastname:string;
  @Input() age:number;

  clients : Client[];

  constructor() {
    this.clients = [
     { id: 1, name: "Bob", age: 30},
     { id: 2, name: "Ana", age: 15},
     { id: 3, name: "Maria", age: 25},
     { id: 4, name: "Julia", age: 20},
    ]
   }

  ngOnInit() {
  }

}
