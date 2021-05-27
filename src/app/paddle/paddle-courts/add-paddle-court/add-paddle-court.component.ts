import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PaddleCourt} from "../../../shared/models/paddlecourt.model";
import {PaddleCourtType} from "../../../shared/models/paddlecourttype.model";
import {PaddleCourtService} from "../paddle-court.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-paddle-court',
  templateUrl: './add-paddle-court.component.html',
  styleUrls: ['./add-paddle-court.component.css']
})
export class AddPaddleCourtComponent implements OnInit {

  form!: FormGroup;
  paddleCourt: PaddleCourt;
  paddleCourtType: PaddleCourtType[];
  isAdd: boolean;

  constructor(private fb: FormBuilder,
              private paddleCourtService: PaddleCourtService,
              @Inject(MAT_DIALOG_DATA) data: any) {
    this.paddleCourtType = Object.values(PaddleCourtType);
    this.paddleCourt = data.data ? data.data : {} as PaddleCourt;
    this.isAdd = data.add;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(this.paddleCourt.name,[Validators.required]),
      paddleCourtType: new FormControl(this.paddleCourt.paddleCourtType,[Validators.required]),
      startTimes: this.fb.array([this.fb.group({start:''})]),
      endTimes: this.fb.array([this.fb.group({end:''})]),
      disabled: new FormControl(this.paddleCourt.disabled,[Validators.required])
    });
    if(!this.isAdd) {
      this.delete(0);
      for(let i = 0; i<this.paddleCourt.startTimes.length; i++){
        this.startTimes.push(this.fb.group({start: this.paddleCourt.startTimes[i]}));
        this.endTimes.push(this.fb.group({end: this.paddleCourt.endTimes[i]}));
      }
    }
  }

  add(): void {
    this.startTimes.push(this.fb.group({start:''}));
    this.endTimes.push(this.fb.group({end:''}));
  }

  delete(index:number): void {
    this.startTimes.removeAt(index);
    this.endTimes.removeAt(index);
  }

  submit(): void {
    this.getPaddleCourt();
    if(this.isAdd)
      this.create();
    else
      this.update();
  }

  getPaddleCourt(): void{
    let startTimesArray=new Array<string>();
    let endTimesArray=new Array<string>();
    for(let i=0; i<this.startTimes.value.length; i++){
      startTimesArray.push(this.startTimes.value[i].start);
      endTimesArray.push(this.endTimes.value[i].end);
    }
    this.paddleCourt = {
      id: this.paddleCourt.id,
      name: this.getFormValue('name'),
      paddleCourtType: this.getFormValue('paddleCourtType'),
      startTimes: startTimesArray,
      endTimes: endTimesArray,
      disabled: this.getFormValue('disabled')
    }
  }

  create(): void{
    this.paddleCourtService.create(this.paddleCourt).subscribe(result=>console.log(result));
  }

  update(): void{
    this.paddleCourtService.update(this.paddleCourt).subscribe(result=>console.log(result));
  }

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
