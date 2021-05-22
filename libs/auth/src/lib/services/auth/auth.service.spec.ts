import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpRequestInterceptorMocksService, adminSuccessCredentials, adminSuccessLogin } from '@dc/mocks';
import { User } from '@dc/models';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpRequestInterceptorMocksService,
          multi: true
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a succesful login', (done) => {
    service.login(adminSuccessCredentials).subscribe((loggerUser: Omit<User, 'password'>) => {
      expect(loggerUser).toBe(adminSuccessLogin);
      done();
    });
  })
});
