import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8080/api/auth/';

export interface User {
  accessToken: string;
  email: string;
  id: number;
  refreshToken: string;
  roles: string[];
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(AUTH_API + 'signin', {username, password});
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {username, email, password});
  }

  refreshToken(token: string) {
    return this.http.post(AUTH_API + 'refreshtoken', {refreshToken: token})}

}
