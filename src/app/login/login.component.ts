import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.signin(username, password).subscribe(
      data => {
        this.isLoggedIn = true;
        window.location.href = '/profile';
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  redirectToProfile() {
    window.location.href = '/profile';
  }

}