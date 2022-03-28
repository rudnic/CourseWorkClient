import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ObjectListDto } from '../dto/ObjectsListDto';

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  constructor(private http: HttpClient) { }

  addReview(obj: ObjectListDto, type: string, title: string, comment: string) {
    return this.http.post<any>(environment.API_URL + "/objects/" + obj.id + "/add-review", {
      type: type,
      header: title,
      text: comment,
    })
  } 
}
