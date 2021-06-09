import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HttpService} from "../../core/http.service";
import {Couple} from "../models/couple.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url: string = 'https://miw-padel-back.herokuapp.com/user/photo';

  constructor(private http: HttpClient, private httpService: HttpService) {
  }

  setImage(formData: FormData): Observable<any>{
    return this.httpService.post(this.url,formData);
  }

  getImage(email: string | undefined): Observable<Blob>{
    return this.http.get(this.url+'?email='+email,{responseType: 'blob'});
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
