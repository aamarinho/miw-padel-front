import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from "./user.model";
import {Role} from "./role.model";
import {HttpService} from "./http.service";
import {Gender} from "../shared/models/gender.model";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static END_POINT = environment.REST + '/user/login';
  private user: User;
  image: any;
  password: string = '';
  private onLogin$ = new Subject<User>();

  constructor(private httpService: HttpService, private router: Router) {
    this.user = {
      token: "",
      email: "",
      gender: Gender.NULL,
      roles: []
    }
    this.image = "../../assets/images/default.png";
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
          this.user.gender = jwtHelper.decodeToken(jsonToken.token).gender;
          this.password = password;
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

  getImage(): any {
    return this.image;
  }

  getEmail(): string | undefined {
    return this.user ? this.user.email : undefined;
  }

  getToken(): string | undefined {
    return this.user ? this.user.token : undefined;
  }

  getGender(): Gender | undefined {
    return this.user ? this.user.gender : undefined;
  }

  setImage(image: any): void{
    let reader = new FileReader();
    reader.addEventListener("load",()=>{
      this.image = reader.result;
    },false);
    if(image) {
      reader.readAsDataURL(image);
    }
  }

}
