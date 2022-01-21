import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User } from '@nxext-demo/core-angular';

@Component({
  selector: 'nxext-demo-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = new Observable<[]>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>('api/account').pipe(
      catchError(err => {
        console.error(err);
        return of([
          {
            "role": "User",
            "firstName": "John",
            "lastName": "Doe",
            "avatarUrl": "https://www.gravatar.com/avatar?d=mp"
          },
          {
            "role": "Admin",
            "firstName": "Jane",
            "lastName": "Doe",
            "avatarUrl": "https://www.gravatar.com/avatar?d=mp"
          }
        ]);
      })
    );
  }
}
