import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(username: string, firstname: string, lastname: string, password: string) {
    return this.http.post<any>(environment.API_URL + '/api/auth/signup', {
      username,
      firstname, 
      lastname,
      password
    })
  }
}
