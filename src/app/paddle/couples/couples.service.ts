import { Injectable } from '@angular/core';
import {Couple} from "../../shared/models/couple.model";
import {CoupleState} from "../../shared/models/couplestate.model";
import {Gender} from "../../shared/models/gender.model";
import {HttpService} from "../../core/http.service";
import {Observable, of} from "rxjs";

const COUPLES_CONSOLIDATE: Couple[] =[
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player3@player.com",playerName:"Andrea3 Álvarez Mariño",coupleState:CoupleState.CONSOLIDATE,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Andrea Álvarez Mariño",coupleState:CoupleState.CONSOLIDATE,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrea2 Álvarez Mariño",coupleState:CoupleState.CONSOLIDATE,gender:Gender.MIXED,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Andrea Álvarez Mariño",coupleState:CoupleState.CONSOLIDATE,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrea2 Álvarez Mariño",coupleState:CoupleState.CONSOLIDATE,gender:Gender.MIXED,creationDate:new Date()},
]

const COUPLES_PENDING: Couple[] =[
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player3@player.com",playerName:"Juan Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Perico Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrés Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Andrea Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Misil Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
]

@Injectable({
  providedIn: 'root'
})
export class CouplesService {

  url: string = 'https://miw-padel-back.herokuapp.com/paddle-court'

  constructor(private httpService: HttpService) { }

  getConsolidate(): Observable<Couple[]> {
    return of(COUPLES_CONSOLIDATE);
  }

  getPending(): Observable<Couple[]> {
    return of(COUPLES_PENDING);
  }

  accept(couple: Couple): Observable<Couple> {
    return of(COUPLES_PENDING[0]);
  }

  decline(couple: Couple): Observable<Couple> {
    return of(COUPLES_PENDING[0]);
  }

}
