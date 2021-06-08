import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpService} from "../../core/http.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = 'https://miw-padel-back.herokuapp.com/user/photo';

  constructor(private http: HttpClient, private httpService: HttpService) {
  }

  getImage(email: string | undefined): Observable<Blob>{
    return this.http.get(this.url+'?email='+email,{responseType: 'blob'});
  }

  setImage(formData: FormData): Observable<any>{
    return this.httpService.post(this.url,formData);
  }

}
