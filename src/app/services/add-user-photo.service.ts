import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUserPhotoService {

  constructor(private http: HttpClient) { }

  addPhotos(cnt: number, token: string) {
    this.http.post(environment.API_URL + "/add-photo", {
      count: cnt,
      uuid: token
    }).subscribe({
      error: error => {
        console.log(error);
      }
    })
  }
}
