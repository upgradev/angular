import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = 'http://localhost:3000/auth';

  private subbjUser$ : BehaviorSubject<User> = new BehaviorSubject(null);
  private subbjLoggedIn$ : BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient : HttpClient) { }

  register(user: User) : Observable<User>{
    return this.httpClient.post<User>(`${this.url}/register`, user);
  }

  login(credentials : {email: string, password: string}) : Observable<User>{
    return this.httpClient.post<User>(`${this.url}/login`, credentials)
    .pipe(
      tap((u: User) => {
        localStorage.setItem('token', u.token);
        this.subbjLoggedIn$.next(true)
        this.subbjUser$.next(u);
      })
    )
  }

  isAithenticated() : Observable<boolean>{
    const token = localStorage.getItem('token');
    if(token && !this.subbjLoggedIn$.value){
      return this.checkTokenValidation();
    }
    return this.subbjLoggedIn$.asObservable();
  }

  checkTokenValidation(): Observable<boolean>{
    return this.httpClient.get<User>(`${this.url}/user`)
    .pipe(
      tap((u: User) => {
       if(u){
        localStorage.setItem('token', u.token);
        this.subbjLoggedIn$.next(true);
        this.subbjUser$.next(u);
       }
      }),
      map((u: User) => (u) ?true:false),
      catchError((err) => {
        this.logout();
        return of(false);
      })
    );
  }

  getUser(): Observable<User>{
    return this.subbjUser$.asObservable();
  }

  logout(){
    localStorage.removeItem('token');
    this.subbjLoggedIn$.next(false);
    this.subbjUser$.next(null);
  }
}
