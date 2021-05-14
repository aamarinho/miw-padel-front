/*
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {HomeService} from "./home.service";
import {User} from "../shared/models/user.model";
import {Role} from "../core/role.model";
import {Gender} from "../shared/models/gender.model";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";


describe('HomeService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let homeService: HomeService;

  beforeEach(() => { TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      MatSnackBarModule,
      RouterTestingModule,
      BrowserAnimationsModule
    ],
    providers: [HomeService]
  });

  httpClient = TestBed.inject(HttpClient);
  httpTestingController = TestBed.inject(HttpTestingController);
  homeService = TestBed.inject(HomeService);
  });

  afterEach(()=>
    httpTestingController.verify()
  );

  it('should not exist email and return user', () => {
    const user = Object({
      firstName: "Name",
      familyName: "Family name",
      email:"unregistered@gmail.com",
      roles: [Role.ROLE_PLAYER],
      password: "11111",
      gender: Gender.FEMALE,
      enabled: false,
      birthDate: new Date()
    });
    const httpResponse = {
      headers: new HttpHeaders(),
      status: 200,
      statusText: 'OK',
      url: 'https://miw-padel-back.herokuapp.com/user/register',
      ok: true,
      type: 4,
      body: user
    }

    homeService.register(user).subscribe(
      (data)=> {
        expect(data.body).toEqual(user);
      }
    );
    const req = httpTestingController.expectOne(homeService.url+'/register');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(user);

    req.flush(user, { status: 200, statusText: 'Ok' });
  });

  it('should turn 409 conflict because of registered email', () => {
    const user = {
      firstName: "Name",
      familyName: "Family name",
      email:"registered@gmail.com",
      roles: [Role.ROLE_PLAYER],
      password: "11111",
      gender: Gender.FEMALE,
      enabled: false,
      birthDate: new Date('now')
    }

    homeService.register(user).subscribe(
      () => fail('Should have failed with 409 Conflict Exception'),
      (error: HttpErrorResponse) => {
        console.log(error);
        //expect(error.status).toEqual(409);
        expect(error).toContain('409 Conflictttttttttt');
      }
    );
    const req = httpTestingController.expectOne(homeService.url+'/register');
    req.flush('409 Conflicttt', { status: 409, statusText: 'Conflict' });
  });

  it('prueba', () => {
    const token = {token: "abc"}

    homeService.prueba().subscribe(
      data=> {
        console.log(data);
        expect(data.body).toEqual(token);
      }
    );
    const req = httpTestingController.expectOne(homeService.url+'/prueba');
    expect(req.request.method).toEqual('GET');
    expect(req.request.body).toEqual(token);

    req.flush(token);
  });

  /!*it('should exist email and password and return token', () => {
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
  });*!/

});

*/
