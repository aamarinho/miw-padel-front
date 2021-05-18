import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paddle',
  templateUrl: './paddle.component.html',
  styleUrls: ['./paddle.component.css']
})
export class PaddleComponent implements OnInit {

  isShown:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
