import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Dvd } from '../models/dvd';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$ : BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject$.asObservable();

  constructor() { 

    timer(2000)
    .subscribe(
      () => {
        this.dvdSubject$.next([
          {title: 'DVD - Angra', year: 2003, genre: "Metal"},
          {title: 'CPM 22', year: 2005, genre: "Rock"},
        ])
      }
    )

  }

  add(b : Dvd){
    this.dvdSubject$.getValue().push(b);
  }

  remove(i: number){
    let dvds = this.dvdSubject$.getValue();
    if(i >=0 && i < dvds.length){
      dvds.splice(i, 1);
    }
  }

  get(i: number) : Observable<Dvd>{
    return this.dvds$.pipe(
      map(dvds => (i >=0 && i < dvds.length) ? dvds[i] : null ),
      delay(1000)
    )
  }
}
