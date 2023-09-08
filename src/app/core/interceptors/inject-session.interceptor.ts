import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {
  private _cookieService = inject(CookieService);
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    try {
      const jwt  = this._cookieService.get('jwt');
      let newReq = request;
      newReq = request.clone({
        setHeaders: {
          authorization:`Bearer ${jwt}`
        }
      });
      return next.handle(newReq);
    } catch(e) {
      console.error('ERROR:',e);
      return next.handle(request);
    }
    
  }
}
