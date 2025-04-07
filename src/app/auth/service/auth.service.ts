import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiConfig } from '../../../enviroments/enviroments';
import { UserCredentials, SignInResponse } from '../models/user.model';

const url = apiConfig.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly http = inject(HttpClient);

  login(credentials: UserCredentials): Observable<any> {
    const apiUrl = `${url}/api/user/login`;

    const headers = new HttpHeaders({
      'accept': '*/*',
      'Content-Type': 'application/json'
    });

    return this.http.post<SignInResponse>(apiUrl, credentials, { headers })
      .pipe(map((response: SignInResponse) => {
        localStorage.setItem('accessToken', response.token);
        return {
          id: response.userId,
          username: response.username,
          email: credentials.email,
          token: response.token
        };
      }));
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return !!token && token !== 'undefined' && token !== 'null';
  }
}