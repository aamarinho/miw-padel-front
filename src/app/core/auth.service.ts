import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

import {User} from "./user.model";
import {Role} from "./role.model";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static END_POINT = "https://miw-padel-back.herokuapp.com/user/login";
  private user: User;
  password: any = undefined;
  private onLogin$ = new Subject<User>();

  constructor(private httpService: HttpService, private router: Router) {
    this.user = {
      token: "",
      email: "",
      roles: []
    }
  }

  login(email: string, password: string): Observable<User> {
    const body={email: email, password: password};
    return this.httpService.authBasic(email, password)
      .post(AuthService.END_POINT, body)
      .pipe(
        map<any,any>(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken;
          this.user.email = jwtHelper.decodeToken(jsonToken.token).sub;
          this.user.roles = jwtHelper.decodeToken(jsonToken.token).role;

          this.password = password;
          console.log(this.user);
          this.onLogin$.next(this.user);
          return this.user;
        })
      );
  }

  logout(): void {
    this.user = {
      token: "",
      email: "",
      roles: []
    };
    this.router.navigate(['']).then();
  }

  isAuthenticated(): boolean {
    return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }

  hasRoles(roles: Role[]): boolean {
    return this.isAuthenticated() && roles.some(element => this.user.roles?.includes(element));
  }

  isAdmin(): boolean {
    return this.hasRoles([Role.ROLE_ADMIN]);
  }

  isPlayer(): boolean {
    return this.hasRoles([Role.ROLE_PLAYER]);
  }

  getEmail(): string | undefined {
    return this.user ? this.user.email : undefined;
  }

  getToken(): string | undefined {
    return this.user ? this.user.token : undefined;
  }

  getRoles(): Role[] | undefined {
    return this.user ? this.user.roles : undefined;
  }

  getPassword(): string{
    return this.user ? this.password : undefined;
  }

  setEmail(email: string): void {
    this.user.email = email;
  }

  setUser(user: User): void{
    this.user = user;
  }

}
