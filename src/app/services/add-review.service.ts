import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ObjectDto } from '../dto/ObjectsListDto';

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  constructor(private http: HttpClient) { }

  addReview(obj: ObjectDto, type: string, title: string, comment: string) {
    this.http.post(environment.API_URL + "/objects/" + obj.id + "/add-review", {
      type: type,
      header: title,
      text: comment,
    }).subscribe({
      error: error => {
        console.log(error);
      }
    })
    console.log("sending");
    console.log(environment.API_URL + "/objects/" + obj.id + "/add-review");
  } 
}
