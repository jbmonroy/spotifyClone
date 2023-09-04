import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  errorSession:boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ])
  });
  private _authService = inject(AuthService);

  sendCredential(): void {
    this.errorSession = false;
    const { email, password } = this.loginForm.value as {email:string,password:string};
    this._authService.sendCredentials(email, password).subscribe({
      next: logInfo =>{
        console.log(logInfo);
      },
      error: error=>{
        console.log('ERROR DE AUTENTICACIÓN:',error);
        this.errorSession = true;
      }
    });
  }
}
