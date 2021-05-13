/*

import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

describe('LoginService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loginService: LoginService;

  beforeEach(() => { TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LoginService]
  });

  httpClient = TestBed.inject(HttpClient);
  httpTestingController = TestBed.inject(HttpTestingController);
  loginService = TestBed.inject(LoginService);
  });

  afterEach(()=>
    httpTestingController.verify()
  );

  it('should exist email and password and return token', () => {
    const user = {email:"registered@gmail.com",password:"11111"}
    const token = {token: "abc"}

    loginService.login(user.email,user.password).subscribe(
      data=> {
        expect(data).toEqual(token);
      }
    );
    const req = httpTestingController.expectOne(loginService.url+'/login');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(JSON.stringify(user));

    req.flush(token);
  });

  it('should turn 404 error because of unregistered email', () => {
    const user = {email:"unregistered@gmail.com",password:"11111"};

    loginService.login(user.email,user.password).subscribe(
      () => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('404 Not Found');
      }
    );
    const req = httpTestingController.expectOne(loginService.url+'/login');
    req.flush('404 Not Found', { status: 404, statusText: 'Not Found' });
  });

});

*/
