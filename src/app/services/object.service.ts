import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ObjectDto } from 'src/app/dto/object_dto/ObjectDto'

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) {  }

  getObject(idObject: number) {
    return this.http.get<ObjectDto>(environment.API_URL + '/object/' + idObject);
  }
}
