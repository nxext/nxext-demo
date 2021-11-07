import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '@nxext-demo/core-angular';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string | undefined;

  constructor(private http: HttpClient, private router: Router) {
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get Token() {
    return this.token;
  }

  login(loginData: LoginData) {
    this.http
      .post('api/auth/login', loginData)
      .pipe(tap((response: any) => {
        if(response.access_token !== undefined) {
          this.token = response.access_token;
          this.loggedIn.next(true);
          this.router.navigateByUrl('user-list');
        }
      })).subscribe();
  }
}
