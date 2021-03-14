import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getBikes() {
    return this.http.get('/server/api/v1/bikes');
  }

}
