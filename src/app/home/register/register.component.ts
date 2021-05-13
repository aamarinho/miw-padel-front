import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Gender} from "../../shared/models/gender.model";
import {User} from "../../shared/models/user.model";
import {HomeService} from "../home.service";
import {Role} from "../../core/role.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  genders: Gender[];
  user: User = {} as User;

  constructor(private loginservice: HomeService, private fb: FormBuilder) {
    this.genders = Object.values(Gender);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
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
      firstName: this.form.get('firstName')?.value,
      familyName: this.form.get('familyName')?.value,
      email: this.form.get('email')?.value,
      roles: [Role.ROLE_PLAYER],
      password: this.form.get('password')?.value,
      gender: this.form.get('gender')?.value,
      birthDate: this.form.get('birthDate')?.value
    }
    console.log(this.user);
    this.loginservice.register(this.user).subscribe(result=>console.log(result), error => console.log(error));
  }

  get getFormControl(){
    return this.form.controls;
  }

}
