import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.scss']
})
export class SearchBannerComponent implements OnInit {

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
