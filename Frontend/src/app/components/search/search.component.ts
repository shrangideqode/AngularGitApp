import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { 
    this.searchText = '';
  }

  @Input() title:string = '';
  @Output() searchEvent = new EventEmitter<string>();
  searchText:string;

  ngOnInit(): void {
    
  }

  // This will emit search text whenever we click on submit or press enter to submit
  search():void{
    console.log('search:', this.searchText);
    
    this.searchEvent.emit(this.searchText.trim())
   
  }

}
