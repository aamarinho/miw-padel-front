import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Gender } from "../../shared/models/gender.model";
import { User } from "../../shared/models/user.model";
import { HomeService } from "../home.service";
import { Role } from "../../core/role.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  genders: Gender[];
  user: User = {} as User;
  image: any;

  constructor(private homeService: HomeService,
              private fb: FormBuilder,
              public datePipe: DatePipe) {
    this.genders = Object.values(Gender);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      image: new FormControl(this.user.firstName, [Validators.required]),
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      familyName: new FormControl(this.user.familyName, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      gender: new FormControl(this.user.gender, [Validators.required]),
      birthDate: new FormControl(this.user.birthDate, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(5), Validators.maxLength(14)])
    });
  }

  register(): void{
    this.user = {
      firstName: this.getFormValue('firstName'),
      familyName: this.getFormValue('familyName'),
      email: this.getFormValue('email'),
      roles: [Role.ROLE_PLAYER],
      password: this.getFormValue('password'),
      gender: this.getFormValue('gender'),
      birthDate: this.datePipe.transform(this.getFormValue('birthDate'), 'yyyy-MM-dd')
    }
    console.log(this.getFormValue('image'));
    let formData = new FormData();
    formData.append('image',this.image);
    formData.append('user',JSON.parse(JSON.stringify(this.user)));
    this.homeService.register(formData).subscribe(
      result=>console.log(result),
      error => console.log(error));
  }

  get getFormControl(){
    return this.form.controls;
  }

  getFormValue(value:string): any{
    return this.form.get(value)?.value;
  }

  onSelectedFile(event: any) {
    this.image = event.target.files[0];
  }
}
