import {Component, OnInit} from '@angular/core';
import {RegisterComponent} from "./register/register.component";
import {MatDialog} from "@angular/material/dialog";
import {HomeService} from "./home.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string;
  password: string;
  form!: FormGroup;
  isShown: boolean = false;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private dialog: MatDialog,
              private loginService: HomeService,
              private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.form = this.fb.group({
      email: new FormControl(this.email, [Validators.required, Validators.email]),
      password: new FormControl(this.password, [Validators.required, Validators.minLength(5), Validators.maxLength(14)])
    });
  }

  login(): void {
    this.authService.login(this.form.get('email')?.value,this.form.get('password')?.value).subscribe(()=>{
      document.body.classList.remove('bg-img');
      this.router.navigate(['paddle/home']).then().finally();
    });
    }

  register(): void {
    this.dialog.open(RegisterComponent, {
      minWidth: '340px',
      minHeight: '200px'
    });
  }

  get getFormControl(){
    return this.form.controls;
  }

}
