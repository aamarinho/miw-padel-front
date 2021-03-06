import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LeaguesService} from "../leagues.service";
import {League} from "../../../shared/models/league.model";
import {Gender} from "../../../shared/models/gender.model";
import {DatePipe} from "@angular/common";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-update-league',
  templateUrl: './add-league.component.html'
})
export class AddLeagueComponent implements OnInit {
  form!: FormGroup;
  league: League;
  genders: Gender[];
  minDate: Date;

  constructor(private fb: FormBuilder,
              private leaguesService: LeaguesService,
              private datePipe: DatePipe,
              private dialogRef: MatDialogRef<AddLeagueComponent>) {
    this.minDate = new Date();
    this.genders = Object.values(Gender).filter(gender => gender != Gender.NULL);
    this.league = {} as League;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(this.league.name,[Validators.required]),
      gender: new FormControl(this.league.gender,[Validators.required]),
      maxCouples: new FormControl(this.league.maxCouples,[Validators.required,Validators.min(2)]),
      startDate: new FormControl(this.league.startDate,[Validators.required]),
      endDate: new FormControl(this.league.endDate,[Validators.required])
    });
  }

  submit(): void {
    this.league = {
      id: '',
      name: this.getFormValue('name'),
      gender: this.getFormValue('gender'),
      maxCouples: this.getFormValue('maxCouples'),
      startDate: this.datePipe.transform(this.getFormValue('startDate'), 'yyyy-MM-dd'),
      endDate: this.datePipe.transform(this.getFormValue('endDate'), 'yyyy-MM-dd')
    }
    this.leaguesService.create(this.league).subscribe(()=>this.dialogRef.close());
  }

  get getFormControl(){
    return this.form.controls;
  }

  getFormValue(value: string): any{
    return this.form.get(value)?.value;
  }
}
