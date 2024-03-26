import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-randomDetails',
  templateUrl: './randomDetails.component.html',
  styleUrls: ['./randomDetails.component.css']
})
export class RandomDetailsComponent implements OnInit {

  @Input()
  level:number = 0;
  @Input()
  shiny:string = "";
  @Input()
  power:string = "";
  @Input()
  beauty:string = "";

  constructor() { }

  ngOnInit() {
  }

}
