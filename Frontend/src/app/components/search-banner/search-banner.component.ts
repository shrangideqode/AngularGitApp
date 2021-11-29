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

  search():void{
    console.log('search:', this.searchText);
    
    this.searchEvent.emit(this.searchText.trim())
   
  }

}
