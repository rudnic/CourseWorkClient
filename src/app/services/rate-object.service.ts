import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RateObjectService {

  constructor(private http: HttpClient) { }

  changeRating(object_id: number, rating: number) {
    return this.http.post<any>(environment.API_URL + '/objects/' + object_id + '/rate', {
      rating
    }) 
  }

  getObjectRating(object_id: number) {
    return this.http.get<number>(environment.API_URL + '/objects/' + object_id + '/rating')
  }
}
