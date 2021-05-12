import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | undefined = this.auth.getToken();
    console.log("Token interceptor");
    if (token) {
      console.log("true");
      return next.handle(request.clone({
          setHeaders: {Authorization: `Bearer ${token}`}
        })
      );
    } else {
      console.log("no token");
      return next.handle(request);
    }
  }
}
