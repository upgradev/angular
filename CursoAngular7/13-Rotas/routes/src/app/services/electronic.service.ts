import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Electronic } from '../models/electronic';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
  static get(i: number): Observable<Electronic> {
    throw new Error("Method not implemented.");
  }

  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronicSubject$.asObservable();

  constructor() {

    timer(1000).subscribe(
      () => {
        this.electronicSubject$.next([
          { name: 'Headphone', brand: 'Bose', price: 200, description: 'Moise cancelling' },
          { name: 'Portable HD', brand: 'Samsung', price: 100, description: '2 TB Hard Disk' },
          { name: 'Monitor 23', brand: 'AOC', price: 200, description: 'HDMI/VGA' },
          { name: 'Processor i7-8700k', brand: 'Intel', price: 400, description: '12 MB Cache' },
          { name: 'Mouse Wireless', brand: 'Logitech', price: 50, description: 'For Games' },
        ])
      }
    )
  }

  get(i: number): Observable<Electronic> {
    return this.electronics$.pipe(
      map(eletronic => (i >= 0 && i < eletronic.length) ? eletronic[i] : null),
      delay(1000)
    )
  }
  
}
