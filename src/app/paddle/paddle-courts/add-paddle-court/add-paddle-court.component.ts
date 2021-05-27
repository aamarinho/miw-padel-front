import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaddleCourt} from "../../../shared/models/paddlecourt.model";
import {PaddleCourtType} from "../../../shared/models/paddlecourttype.model";
import {PaddleCourtService} from "../paddle-court.service";

@Component({
  selector: 'app-add-paddle-court',
  templateUrl: './add-paddle-court.component.html',
  styleUrls: ['./add-paddle-court.component.css']
})
export class AddPaddleCourtComponent implements OnInit {

  form!: FormGroup;
  paddleCourt: PaddleCourt = {} as PaddleCourt;
  paddleCourtType: PaddleCourtType[];

  constructor(private fb: FormBuilder, private paddleCourtService: PaddleCourtService) {
    this.paddleCourtType = Object.values(PaddleCourtType);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(this.paddleCourt.name,[Validators.required]),
      paddleCourtType: new FormControl(this.paddleCourt.paddleCourtType,[Validators.required]),
      startTimes: this.fb.array([this.fb.group({start:''})]),
      endTimes: this.fb.array([this.fb.group({end:''})]),
      disabled: new FormControl(this.paddleCourt.disabled,[Validators.required])
    });
  }

  add() {
    this.startTimes.push(this.fb.group({start:''}));
    this.endTimes.push(this.fb.group({end:''}));
  }

  delete(index:number) {
    this.startTimes.removeAt(index);
    this.endTimes.removeAt(index);
  }

  submit() {
    let startTimesArray=new Array<string>();
    let endTimesArray=new Array<string>();
    for(let item of this.startTimes.value){
      startTimesArray.push(item.start);
    }
    for(let item of this.endTimes.value){
      endTimesArray.push(item.end);
    }
    this.paddleCourt = {
      name: this.getFormValue('name'),
      paddleCourtType: this.getFormValue('paddleCourtType'),
      startTimes: startTimesArray,
      endTimes: endTimesArray,
      disabled: this.getFormValue('disabled')
    }
    console.log(this.paddleCourt);
    this.paddleCourtService.create(this.paddleCourt).subscribe(result=>console.log(result));
  }

  /*getTimeArray(array: any[]): string[]{
    let startTimesArray=new Array<string>();
    for(let item of array){
      startTimesArray.push(item.start);
    }
    return startTimesArray;
  }*/

  get startTimes() {
    return this.form.get('startTimes') as FormArray;
  }

  get endTimes() {
    return this.form.get('endTimes') as FormArray;
  }

  get getFormControl(){
    return this.form.controls;
  }

  getFormValue(value:string): any{
    return this.form.get(value)?.value;
  }

}
