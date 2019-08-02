import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  subscription1 : Subscription;
  n1 : number  = 0;
  n2 : number  = 0;

  s1 : string = '';
  s2 : string = '';

  constructor() { }

  ngOnInit() {
    this.s1 = 'Initial...'
    this.s2 = 'Initial...'
    const myFirstObservable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.error('6');
        observer.complete();
      }
    );
    myFirstObservable.subscribe(
      (n :number) => console.log(n),
      (error) => console.error(error),
      () => console.log('completed') 
    )
    // const timerCount = interval(500);
    // timerCount.subscribe(
    //   (n) => console.log(n) 
    // );
    // console.log("after interval");

    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i : number = 0;
        let id = setInterval(() => {
          i++;
          console.log("from obervable: ", i);
          if(i == 10){
            observer.complete();
          }
          else if(i % 2 ==0){
            observer.next(i);
          }
        }, 1000);
        return () => {
          clearInterval(id)
        }
      }
    );
    this.subscription1 =  myIntervalObservable.subscribe(
      (_n) => {this.n1 = _n},
      (error) => {this.s1 = "error: " + error},
      () => {this.s1 = "completed"}
    );
  }

}
