import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-hot-observables-intro',
  templateUrl: './hot-observables-intro.component.html',
  styleUrls: ['./hot-observables-intro.component.css']
})
export class HotObservablesIntroComponent implements OnInit {

  @ViewChild('myButton') button : ElementRef;

  n1 : number  = 0;
  n2 : number  = 0;
  s1 : string = '';
  s2 : string = '';

  constructor() { }

  ngOnInit() {
    let myButtonClickObservable : Observable<any> = fromEvent(
      this.button.nativeElement, 'click'
    );
    myButtonClickObservable.subscribe((event) => {
      console.log('button clicked 1');
      
    })
    myButtonClickObservable.subscribe((event) => {
      console.log('button clicked 2');
      
    })
    
  }

}
