import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';
import { User } from '../models/produit';

const TOKEN_KEY = 'MyToken';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';
  userlogged: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) {
    this.loadToken();
  }

  async loadToken(){
    const token = await Storage.get({ key: TOKEN_KEY });    
    if (token && token.value) {
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  getUserByEmail(email: string):Observable<any>{
    return this.http.get<any>('https://127.0.0.1:8000/api/users?email='+email)
  }

  login(obj: {login: string, password: string}):Observable<any>{
    return this.http.post<any>('https://127.0.0.1:8000/api/login', obj).pipe(
      map((data: any) => data.token),
      switchMap(token => {
        return from(Storage.set({key: TOKEN_KEY, value: token}));
      }),
      tap(() => {
        this.isAuthenticated.next(true);
      })
    )
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    this.userlogged.next(null);
    return Storage.remove({key: TOKEN_KEY});
  }
  
}
