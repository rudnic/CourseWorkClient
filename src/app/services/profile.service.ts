import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../dto/profile_dto/UserProfile';
// import { UserProfile } from '../classes/profile_dto/UserProfile';

// const API_URL = 'http://localhost:8080/profile';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get<UserProfile>(environment.API_URL + "/profile/" + sessionStorage.getItem("id"))
  }
  
}
