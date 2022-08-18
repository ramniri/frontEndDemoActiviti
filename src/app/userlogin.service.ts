import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
private baseUrl = "http://localhost:8080/user/login";
  constructor(private httpClient : HttpClient) { }

  userLogin(user:User):Observable<object>{
    return this.httpClient.post(this.baseUrl, user);
  }
}
