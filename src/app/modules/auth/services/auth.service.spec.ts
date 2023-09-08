import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as mockRaw from '../../../data/user.data.json';
import { catchError, of, throwError } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser:any = (mockRaw as any).default;
  let httpClientSpy : { post: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = TestBed.inject(AuthService);
    service._httpClient = httpClientSpy;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud return an obj with data and tokenSession', (done: DoneFn)=>{
    //TODO: Arrange
    const user: any = mockUser.userOk;
    const mockResponse = {
      data:{},
      tokenSession:'0x0x0x0.x0'
    }
    httpClientSpy.post.and.returnValue(of(mockResponse));
    //TODO: Act
    service.sendCredentials(user.email, user.password).subscribe({
      next: resApi=>{
        const properties = Object.keys(resApi);
        expect(properties).toContain('data');
        expect(properties).toContain('tokenSession');
        done();
      }
    });
  });

  it('should be a fail response', (done: DoneFn)=>{
    const user: any =  mockUser.userFail;
    const mockResponse = {
      message: 'BAD REQUEST',
      status: 400
    };
    httpClientSpy.post.and.returnValue(throwError(()=>new Error(JSON.stringify(mockResponse))));
    service.sendCredentials(user.email,user.password).subscribe({
      next: res=>{
        expect(res).toEqual([]);
        done();
      }
    });
  });
});
