import { Injectable } from '@angular/core';
import {HttpService} from "../../core/http.service";
import {Observable, of} from "rxjs";
import {League} from "../../shared/models/league.model";
import {Couple} from "../../shared/models/couple.model";
import {CoupleState} from "../../shared/models/couplestate.model";
import {Gender} from "../../shared/models/gender.model";
import {CommonMethods} from "../../shared/common-methods";

const COUPLES: Couple[] = [
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player3@player.com",playerName:"Juan Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Perico Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Andrés Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player@player.com",playerName:"Andrea Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.FEMALE,creationDate:new Date()},
  {id:'',captainEmail:"admin@admin.com",captainName:"Diego Lusquiños Otero",playerEmail:"player2@player.com",playerName:"Misil Álvarez Mariño",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
];

const LEAGUES: League[] = [
  {id:'1',name:'Europa League',gender:Gender.FEMALE,couples:COUPLES,maxCouples:20,startDate:CommonMethods.getTodayDate(),endDate:CommonMethods.getTodayDate()},
  {id:'2',name:'Second League',gender:Gender.MIXED,couples:COUPLES,maxCouples:15,startDate:CommonMethods.getTodayDate(),endDate:CommonMethods.getTodayDate()},
]

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  url: string = 'https://miw-padel-back.herokuapp.com/paddle-court'

  constructor(private httpService: HttpService) { }

  get(): Observable<League[]>{
    return of(LEAGUES);
  }
}
