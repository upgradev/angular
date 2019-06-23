import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Subject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  private subscriptionsAreActive = false;
  private subscripitons: Subscription[] = [];

  private unsubscribeAll$ : Subject<any> = new Subject();
  private intervalSubscription: Subscription = null;

  constructor() { }

  ngOnInit() {
    this.checkSubscriptions();
  }

  checkSubscriptions(){
   this.intervalSubscription = interval(100)
   .subscribe(()=> {
      let active = false;
      this.subscripitons.forEach((s) => {
        if(!s.closed)
          active = true;
      })
      this.subscriptionsAreActive = active;
    })
  }

  subscribe(){
    const subscription1 = interval(100)
    .pipe(takeUntil(this.unsubscribeAll$))
    .subscribe((i) => {console.log(i); })
    const subscription2 = fromEvent(document, 'mousemove')
    .pipe(takeUntil(this.unsubscribeAll$))
    .subscribe((e) => console.log(e))
    this.subscripitons.push(subscription1);
    this.subscripitons.push(subscription2);
  }

  unsubscribe(){
    this.unsubscribeAll$.next();
  }

  ngOnDestroy(): void {
    if(this.intervalSubscription!=null){
      this.intervalSubscription.unsubscribe();
    }
    this.unsubscribeAll$.next();
    
  }

}
