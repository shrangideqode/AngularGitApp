import { Component, OnChanges, OnInit } from '@angular/core';
import { RepositoryService } from '../../services/repository.service';
import { RandomColor } from 'angular-randomcolor';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-respositories',
  templateUrl: './respositories.component.html',
  styleUrls: ['./respositories.component.scss']
})
export class RespositoriesComponent implements OnInit, OnChanges {

  allRepos:any = [];
  lastSearch:string = '';
  total:number = 0;
  flag:number = 0;
  page:number= 1;
  limit:number = 10;
  loader:boolean = false;

  constructor(private repoService: RepositoryService, private matSnack:MatSnackBar) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log('Changes')
  }

  // Helper function to convert dateString into Date Object
  getDate(dateString:string): Date{
    const date = new Date(dateString);
    return date;
  }

  // Changing the page 
  changePage(pageNumber:number): void{
    this.page = pageNumber;
    this.searchRepo(this.lastSearch)
  }

  // Get All Repositories from Backend
  searchRepo(value: string): void{
    this.loader = true;
    this.lastSearch = value;
    console.log("Finding repositories :", value)
    const params = {
      q: value,
      page: this.page,
      limit: this.limit
    };

    this.repoService.getRepos(params)
    .subscribe((res:any)=>{
      console.log(res);
      if(res.statusCode == 200){
        this.total = res.data.total_count;
        this.allRepos = res.data.items.map((repo:any)=>{
          repo.bgColor = RandomColor.generateColor()  // Adding random color variable
          return repo;
        });
        this.flag = 1;
        this.loader = false;
      }
      if(res.statusCode == 400){
        this.matSnack.open('Error: Cannot Get Repositories','',{"duration":1500})
      }
    }, (err)=>{
      console.error("Error:",err)
      this.loader = false;
      this.matSnack.open('Error: Connecting to server','',{"duration":1500})
      
    })
  }



}
