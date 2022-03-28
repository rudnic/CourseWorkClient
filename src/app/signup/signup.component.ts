import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  form: any = {
    username: null,
    firstname: null,
    lastname: null,
    password: null
  };

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, firstname, lastname, password } = this.form;
    console.log(this.form);
    this.signupService.signUp(username, firstname, lastname, password).subscribe(
      () => {
        location.replace('/signin');
      }
    )
  }

}
