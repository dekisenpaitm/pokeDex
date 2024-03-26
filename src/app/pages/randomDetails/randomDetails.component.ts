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

  compareNumberValue(value:number):string{
    let newColor=""
    switch(true){
      case (value <= 25):
        newColor = 'crimson'
        break;
      case (value >= 26 && value <= 75):
        newColor = 'orange'
        break;
      case (value >= 76 && value <= 98):
        newColor = 'green'
        break;
      case (value >= 76 && value <= 98):
        newColor = 'purple'
        break;
    }
    return newColor;
  }

  compareTextValue(text:string,case1:string,case2:string,case3:string,case4:string):string{
    let newColor=""
    switch(true){
      case case1 == text:
        newColor = 'crimson'
        break;
      case case2 == text:
        newColor = 'orange'
        break;
      case case3 == text:
        newColor = 'green'
        break;
      case case4 == text:
        newColor = 'purple'
        break;
    }
    return newColor;
  }

  ngOnInit() {
  }



}
