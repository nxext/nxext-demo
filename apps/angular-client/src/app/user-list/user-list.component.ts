import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '@nxext-demo/core-angular';

@Component({
  selector: 'nxext-demo-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = new Observable<[]>();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.users$ = this.http.get<User[]>('api/account');
  }
}
