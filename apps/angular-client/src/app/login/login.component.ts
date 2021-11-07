import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nxext-demo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {
  }

  loginData(event: any) {
    this.authService.login(event.detail);
  }
}
