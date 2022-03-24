import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) {  }

  getObject(idObject: number) {
    return this.http.get<any>(environment.API_URL + '/object/' + idObject);
  }
}
