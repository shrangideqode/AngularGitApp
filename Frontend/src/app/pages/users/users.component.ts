import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UserService,
    private matSnack: MatSnackBar
  ) { }

  allUsers:any = [];
  total:number = 0;
  lastSearch:string = '';
  flag:number = 0;
  page:number = 1;
  limit:number = 10;
  loader:boolean = false;

  ngOnInit(): void {
  }

  // Helper function to get users image url.
  getImage(user:any): string{
    return user.avatar_url;
  }

  // Runs when we change page from Pagination
  changePage(pageNumber:number): void{
    this.page = pageNumber;
    this.searchUsers(this.lastSearch)
  }

  // Get all users from Backend
  searchUsers(value:string): void{
    this.loader = true;
    this.lastSearch = value;
    console.log("Finding users :", value);
    const params = {
      q: value,
      page: this.page,
      limit: this.limit
    };

    this.userService.getUsers(params)
    .subscribe((res:any)=>{
      console.log(res);
      if(res.statusCode == 200){
        this.allUsers = res.data.items;
        this.total = res.data.total_counts;
        this.flag = 1;
        this.loader = false;
      }
      if(res.statusCode == 400){
        this.loader = false;
        this.matSnack.open('Error: Cannot Get Users','',{"duration":1500})
      }
    },(err)=>{
      this.loader = false;
      this.matSnack.open('Error: Connecting to Server','',{"duration":1500})
      console.error('Error Fetching Users',err)
    })
  }

}
