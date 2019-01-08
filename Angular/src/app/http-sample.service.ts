import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpSampleService {

  constructor(private http :HttpClient) { }
  login(value){
    return this.http.post('http://localhost:5000/admin/login',value);
  }
}
