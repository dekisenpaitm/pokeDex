import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output()
  searchTextChange = new EventEmitter<string>();

  searchText = "";

  constructor() { }

  ngOnInit() {
  }

  onSearchTextChange(value:string){
    this.searchText = value;
    this.searchTextChange.emit(this.searchText)
  }

}

