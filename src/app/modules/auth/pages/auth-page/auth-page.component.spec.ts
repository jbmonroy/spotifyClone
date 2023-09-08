import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [AuthPageComponent]
    });
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //TODO:Primer enunciado
  //TODO:Debe asegurarse que el formulario sea invalido cuando se ingresen datos erroneos

  it('🔴 should be form invalid', () => {
    //TODO: Arranque
    const mockCredentials = {
      email:'0-0-0-0',
      password:'1234567891011'
    }
    const emailInput:any = component.loginForm.get('email');
    const passwordInput:any = component.loginForm.get('password');
    //TODO: Act
    emailInput.setValue(mockCredentials.email);
    passwordInput.setValue(mockCredentials.password);
    //TODO: Assert
    expect(component.loginForm.invalid).toBeTrue();
  });

  it('🆗 should be form valid', () => {
    //TODO: Arranque
    const mockCredentials = {
      email:'test@test.com',
      password:'12345678'
    }
    const emailInput:any = component.loginForm.get('email');
    const passwordInput:any = component.loginForm.get('password');
    //TODO: Act
    emailInput.setValue(mockCredentials.email);
    passwordInput.setValue(mockCredentials.password);
    //TODO: Assert
    expect(component.loginForm.valid).toBeTrue();
  });

  it('🤟 button should have the word "Iniciar sesión"',()=>{
    const elementRef =  fixture.debugElement.query(By.css('.form-action button'));
    const innerText  = elementRef.nativeElement.innerText;
    expect(innerText).toEqual('Iniciar sesión');
  });
});
