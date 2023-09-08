import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = `${environment.NODE_API}/auth`;
  private httpClient = inject(HttpClient);
  private _cookieService = inject(CookieService);
  constructor() { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    };
    return this.httpClient.post(`${this.API}/login`, body).pipe(
      tap((dataRaw:any)=>{
        const { data, tokenSession } = dataRaw;
        this._cookieService.set('jwt', tokenSession, 4, '/');
        return data;
      }),
      catchError((err:any)=>{
        console.error('ERROR:',err);
        return of([]);
      })
    );
  }

  set _httpClient(http:any){
    this.httpClient = http;
  }
}
