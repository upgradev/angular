import { Component, OnInit } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { map, tap, catchError, retry, retryWhen, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startTest() {
    let obj: Observable<any> = new Observable((observer) => {
      for (let i = 0; i < 10; i++) {
        if (i == 7) {
          observer.error(`an error occurred when i = ${i} `);
        }
        else {
          observer.next(i);
        }

      }
    });
    // obj
    //   .pipe(
    //     map(i => i * 10),
    //     tap(i => console.log('before error handling: ' + i),
    //       catchError(error => {
    //         console.error('Inside catchError: ' + error);
    //         //return of(0)
    //         return throwError('throwError: error')
    //       })
    //     ),
    //     //retry(2),
    //     retryWhen(i => timer(5000))
    //   )
    //   .subscribe(
    //     (i) => console.log("Normal output"),
    //     (err) => console.log(err),
    //     () => console.log('completed')

    //   )

      let obj2 : Observable<any> = new Observable((observer) => {
        timer(2000).subscribe((n) => observer.next(1000));
        timer(2000).subscribe((n) => observer.complete());
      })
      obj2
      .pipe(
        timeout(2400)
      )
      .subscribe(
        (i) => console.log("N: " + i),
        (err) => console.log(err),
        () => console.log('completed')
      )
  }

}
