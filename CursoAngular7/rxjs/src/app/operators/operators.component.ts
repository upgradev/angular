import { Component, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, Subscription, Subject, timer } from 'rxjs';
import { map, delay, filter, tap, take, first, last, debounceTime, takeWhile, takeUntil } from 'rxjs/operators';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {

  @ViewChild(MatRipple) ripple: MatRipple;
  private searchInput: string = "";

  constructor() { }

  ngOnInit() {
  }

  mapClick(){
    from([1,2,3,4,5,6,7])
    .pipe(
      map(i => 2 * i),
      map(i => i * 10),
      delay(1000)
    )
    .subscribe(i => console.log(i))

    fromEvent(document, 'click')
    .pipe(
      map((e: MouseEvent) => ({
        x: e.screenX, y: e.screenY
      }))
    ).subscribe((pos) => console.log(pos)
    )
  }

  filterClick(){
    from([1,2,3,4,5,6,7])
    .pipe(
      filter(i => i % 2 == 1)

    )
    .subscribe(i => console.log(i))

    interval(1000)
    .pipe(
      filter(i => i % 2 == 0),
      map(i => "value: " + i),
      delay(1000)
    )
    .subscribe(i => console.log(i))
  }

  tapClick(){
    interval(1000)
    .pipe(
      tap(i => console.log('')),
      tap(i => console.warn('before filter ', i)),
      filter(i => i % 2 == 0),
      tap(i => console.warn('after filter ', i)),
      map(i => "value: " + i),
      tap(i => console.warn('after map ', i)),
      delay(1000),
      
    )
    .subscribe(i => console.log(i))
  }

  takeClick(){
    const observable = new Observable((observer) => {
      let i;
      for(i = 0; i < 20; i++){
        setTimeout(() => observer.next(Math.floor(Math.random() * 100)), i * 100);
      }
      //setTimeout(()=> observer.complete(), i * 100);
    });

    const s : Subscription = observable
    .pipe(
      tap(i => console.log(i)),
      //fazer subscribe para não ter memoria 
      take(20)
      //first()
      //last()
    )
    .subscribe(
      v => console.log('Output: ' + v),
      (error) => console.log(error),
      () => console.log("complete!")
      
      );
    const interval =  setInterval(() => {
      console.log('Checking...');
      if(s.closed){
        console.warn("subscription closed");
        clearInterval(interval);
      }
      
    }, 200)
  }

  lauchRipple(){
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true
    });
    rippleRef.fadeOut();
  }

  debounceTimeClick(){
    fromEvent(document, 'click')
    .pipe(
      tap((e) => {console.log('clicl');
      
      }),
      debounceTime(1000)
    )
    .subscribe((e: MouseEvent) => {
      console.log("click with rebounce time: ", e);
      this.lauchRipple();
    })
  }

  searchEntry$ : Subject<string> = new Subject<string>();

  searchBy_UsingDebounce(event){
    this.searchEntry$.next(this.searchInput);
  }

  debounceTimeSearch(){
    this.searchEntry$
    .pipe(debounceTime(500))
    .subscribe((s) => console.log(s)
    )
  }

  takeWhileClick(){
    interval(500)
    .pipe( takeWhile((value, index) => (value < 5)) )
    .subscribe(
      (i) => console.log('takeWhile: ', i),
      (error) => console.log(error),
      () => console.log('completed'));
  }

  takeUntil(){

    let dueTime$ = timer(5000);

    interval(500)
    .pipe( takeUntil(dueTime$) )
    .subscribe(
      (i) => console.log('takeWhile: ', i),
      (error) => console.log(error),
      () => console.log('completed'));
  }


}
