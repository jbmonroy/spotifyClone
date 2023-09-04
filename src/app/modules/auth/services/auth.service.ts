import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = `${environment.NODE_API}/auth`;
  private httpClient = inject(HttpClient);

  constructor() { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    };
    return this.httpClient.post(`${this.API}/login`, body);
  }
}
