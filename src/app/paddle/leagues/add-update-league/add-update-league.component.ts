import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {LeaguesService} from "../leagues.service";
import {League} from "../../../shared/models/league.model";
import {Gender} from "../../../shared/models/gender.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-add-update-league',
  templateUrl: './add-update-league.component.html',
  styleUrls: ['./add-update-league.component.css']
})
export class AddUpdateLeagueComponent implements OnInit {

  form!: FormGroup;
  league: League;
  genders: Gender[];
  isAdd: boolean;

  constructor(private fb: FormBuilder,
              private leaguesService: LeaguesService,
              @Inject(MAT_DIALOG_DATA) data: any,
              private datePipe: DatePipe) {
    this.genders = Object.values(Gender);
    this.league = data.data ? data.data : {} as League;
    this.isAdd = data.add;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(this.league.name,[Validators.required]),
      gender: new FormControl(this.league.gender,[Validators.required]),
      maxCouples: new FormControl(this.league.maxCouples,[Validators.required]),
      startDate: new FormControl(this.league.startDate,[Validators.required]),
      endDate: new FormControl(this.league.endDate,[Validators.required])
    });
  }

  submit(): void {
    this.getLeague();
    /*if(this.isAdd)
      this.create();
    else
      this.update();*/
    console.log(this.league);
  }

  private getLeague() {
    this.league = {
      id: '',
      name: this.getFormValue('name'),
      gender: this.getFormValue('gender'),
      maxCouples: this.getFormValue('maxCouples'),
      startDate: this.datePipe.transform(this.getFormValue('startDate'), 'yyyy-MM-dd'),
      endDate: this.datePipe.transform(this.getFormValue('endDate'), 'yyyy-MM-dd')
    }
  }

  get getFormControl(){
    return this.form.controls;
  }

  getFormValue(value:string): any{
    return this.form.get(value)?.value;
  }
}
