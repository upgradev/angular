import { Component, OnInit } from '@angular/core';

interface Client{
  firstName: string;
  lastname: string;
  birth: Date;
  gender: string;
  street: string;
  city: string;
  state: string;
  phone1: string; 
  phone2: string;
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  client: Client = {
    firstName: "",
    lastname: "",
    birth: new Date(),
    gender: "",
    street: "",
    city: "",
    state: "",
    phone1: "",
    phone2: ""
  }

  states = ["SP", "PR", "SC", "RS", "PA", "RO", "MA"];

  constructor() { }

  ngOnInit() {
  }


  onSubmit(){
    console.log(this.client);
    
  }

}
