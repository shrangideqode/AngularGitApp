import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http:HttpClient) { 
    
  }

  getRepos(queryParams: any): Observable<any>{
    return this.http.get(`${environment.baseUrl}/repos`, { params: queryParams })
  }
}
