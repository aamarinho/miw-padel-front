import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {EMPTY, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Error} from "./error.model";
import {ErrorNotification} from "./error.notification.model";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  static CONNECTION_REFUSE = 0;
  static UNAUTHORIZED = 401;
  static METHOD_ARGUMENT_NOT_VALID_EXCEPTION = 400;

  private headers: HttpHeaders;
  private params: HttpParams;
  private responseType: string;
  private successfulNotification : string | undefined;
  private errorNotification : string | undefined;

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
    this.successfulNotification = undefined;
    this.errorNotification = undefined;
  }

  param(key: string, value: string | undefined): HttpService {
    if (value != null) {
      this.params = this.params.append(key, value);
    }
    return this;
  }

  successful(notification = 'Successful'): HttpService {
    this.successfulNotification = notification;
    return this;
  }

  error(notification: string): HttpService {
    this.errorNotification = notification;
    return this;
  }

  post(endpoint: string, body?: object): Observable<any> {
    return this.http
      .post(endpoint, body, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  get(endpoint: string): Observable<any> {
    return this.http
      .get(endpoint, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  put(endpoint: string, body?: object): Observable<any> {
    return this.http
      .put(endpoint, body, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error))
      );
  }

  delete(endpoint: string): Observable<any> {
    return this.http
      .delete(endpoint, this.createOptions())
      .pipe(
        map(response => this.extractData(response)),
        catchError(error => this.handleError(error)));
  }

  authBasic(email: string, password: string): HttpService {
    return this.header('Authorization', 'Basic ' + btoa(email + ':' + password));
  }

  header(key: string, value: string): HttpService {
    if (value != null) {
      this.headers = this.headers.append(key, value);
    }
    return this;
  }

  private resetOptions(): void {
    this.headers = new HttpHeaders();
    this.params = new HttpParams();
    this.responseType = 'json';
  }

  private createOptions(): any {
    const options: any = {
      headers: this.headers,
      params: this.params,
      responseType: this.responseType,
      observe: 'response'
    };
    this.resetOptions();
    return options;
  }

  private extractData(response: any): any {
    if (this.successfulNotification) {
      this.snackBar.open(this.successfulNotification, '', {
        duration: 2000
      });
      this.successfulNotification = undefined;
    }
    const contentType = response.headers.get('content-type');
    if (contentType) {
      if (contentType.indexOf('application/json') !== -1) {
        return response.body;
      }
    } else {
      return response;
    }
  }

  private showError(notification: string): void {
    if (this.errorNotification) {
      this.snackBar.open(this.errorNotification, 'Error', {duration: 5000});
      this.errorNotification = undefined;
    } else {
      this.snackBar.open(notification, 'Error', {duration: 5000});
    }
  }

  private handleError(response: any): any {
    let error: Error;
    if (response.status === HttpService.UNAUTHORIZED) {
      this.showError(ErrorNotification.UNAUTHORIZED);
      this.router.navigate(['']).then();
      return EMPTY;
    } else if (response.status === HttpService.CONNECTION_REFUSE) {
      this.showError(ErrorNotification.CONNECTION_REFUSE);
      return EMPTY;
    } else if (response.status === HttpService.METHOD_ARGUMENT_NOT_VALID_EXCEPTION) {
      this.showError(ErrorNotification.METHOD_ARGUMENT_NOT_VALID_EXCEPTION);
      return EMPTY;
    } else {
      try {
        error = response.error;
        this.showError(error.error + ' (' + response.status + '): ' + error.message);
        return throwError(error);
      } catch (e) {
        this.showError(ErrorNotification.NOT_RESPONSE);
        return throwError(response.error);
      }
    }
  }

}
