import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  private router = inject(Router);

  sendCredential(): void {
    const { email, password } = this.loginForm.value as {email:string,password:string};
    this._authService.sendCredentials(email, password).subscribe({
      next: logInfo =>{
        this.router.navigate(['/','tracks']);
        this.errorSession = false;
      },
      error: err=>{
        this.errorSession = true;
      }
    });
  }
}
