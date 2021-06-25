import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpService} from "../../core/http.service";
import {Couple} from "../models/couple.model";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = environment.REST + '/user/photo';

  constructor(private http: HttpClient, private httpService: HttpService) {
  }

  setImage(formData: FormData): Observable<any>{
    return this.httpService
      .successful('Profile photo successfully updated')
      .post(this.url,formData);
  }

  getImage(email: string | undefined): Observable<Blob>{
    return this.http
      .get(this.url+'?email='+email,{responseType: 'blob'});
  }

  getPlayerImageAndPut(couple: Couple){
    this.getImage(couple.playerEmail).subscribe(image => {
      let reader = new FileReader();
      reader.addEventListener("load", () =>
        couple.playerImage = reader.result, false);
      if(image)
        reader.readAsDataURL(image);
    });
  }

  getCaptainImageAndPut(couple: Couple){
    this.getImage(couple.captainEmail).subscribe(image => {
      let reader = new FileReader();
      reader.addEventListener("load", () =>
        couple.captainImage = reader.result, false);
      if(image)
        reader.readAsDataURL(image);
    });
  }

}
