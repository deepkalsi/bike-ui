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
    let basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();

    let header= new HttpHeaders({
      Authorization :  basicAuthHeaderString
    })
    return this.http.get('/server/api/v1/bikes',
      {headers : header});
  }

  // tslint:disable-next-line:typedef
  createBasicAuthenticationHttpHeader(){
    let username = 'user'
    let password='password'
    let basicAuthHeaderString='Basic '+ window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }

}
