import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.includes('api/auth/login')) {
      return next.handle(req);
    } else {
      return this.authService.isLoggedIn.pipe(switchMap(isLoggedIn => {
        if(isLoggedIn && this.authService.Token) {
          const cloned = req.clone({
            setHeaders: {
              Authorization: `Bearer ${this.authService.Token}`
            }
          });
          return next.handle(cloned);
        } else {
          return next.handle(req);
        }
      }));
    }
  }
}
