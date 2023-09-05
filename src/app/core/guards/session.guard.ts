import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  let _cookieService = inject(CookieService);
  let router = inject(Router);
  
  return checkCookie(_cookieService, router);
};

const checkCookie = (_cookieService: CookieService, router: Router)=>{
  try {
    const token: boolean = _cookieService.check('jwt');
    if(!token)
      router.navigate(['/','auth']);
    return token;
  } catch (e) {
    console.error('ERROR',e);
    return false;
  }
};
