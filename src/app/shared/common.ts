import {Couple} from "./models/couple.model";
import {CoupleState} from "./models/couplestate.model";
import {Gender} from "./models/gender.model";
import {League} from "./models/league.model";

export class Common {

  static CONSOLIDATED_COUPLES: Couple[] = [
    {id:'',captainEmail:"player@player.com",captainName:"Player player",playerEmail:"player2@player.com",playerName:"Player2 player2",coupleState:CoupleState.CONSOLIDATED,gender:Gender.MALE,creationDate:new Date()},
    {id:'',captainEmail:"player@player.com",captainName:"Player player",playerEmail:"player3@player.com",playerName:"Player3 player3",coupleState:CoupleState.CONSOLIDATED,gender:Gender.MIXED,creationDate:new Date()},
    {id:'',captainEmail:"player@player.com",captainName:"Player player",playerEmail:"player4@player.com",playerName:"Player4 player4",coupleState:CoupleState.CONSOLIDATED,gender:Gender.FEMALE,creationDate:new Date()},
    {id:'',captainEmail:"player@player.com",captainName:"Player player",playerEmail:"player5@player.com",playerName:"Player5 player5",coupleState:CoupleState.CONSOLIDATED,gender:Gender.MIXED,creationDate:new Date()},
  ];

  static PENDING_COUPLES: Couple[] = [
    {id:'',captainEmail:"player2@player.com",captainName:"Player2 player2",playerEmail:"player@player.com",playerName:"Player",coupleState:CoupleState.PENDING,gender:Gender.FEMALE,creationDate:new Date()},
    {id:'',captainEmail:"player3@player.com",captainName:"Player3 player3",playerEmail:"player@player.com",playerName:"Player",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
    {id:'',captainEmail:"player4@player.com",captainName:"Player4 player4",playerEmail:"player@player.com",playerName:"Player",coupleState:CoupleState.PENDING,gender:Gender.MALE,creationDate:new Date()},
    {id:'',captainEmail:"player5@player.com",captainName:"Player5 player5",playerEmail:"player@player.com",playerName:"Player",coupleState:CoupleState.PENDING,gender:Gender.MIXED,creationDate:new Date()},
  ];

  static LEAGUES: League[] = [
    {id:'1',name:'First League',gender:Gender.FEMALE,couples:Common.CONSOLIDATED_COUPLES,maxCouples:20,startDate:Common.getTodayDate(),endDate:Common.getTodayDate()},
    {id:'2',name:'Second League',gender:Gender.MIXED,couples:Common.CONSOLIDATED_COUPLES,maxCouples:15,startDate:Common.getTodayDate(),endDate:Common.getTodayDate()},
  ]

  static getTodayDate(): string{
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }
}
