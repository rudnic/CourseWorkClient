import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ObjectsListService {

  constructor(private http: HttpClient) { }

  getObjects(objectType: string): Observable<any> {
    return this.http.get<any>(environment.API_URL + "/objects?type=" + objectType)
  }

}
