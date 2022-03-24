import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(username: string, password: string) {
    return this.http.post<any>(environment.API_URL + '/api/auth/signin', {
      username,
      password
    }, httpOptions).pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("id", userData.id);
          sessionStorage.setItem("token", "Bearer " + userData.token);
          return userData;
      })
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
  }

}
