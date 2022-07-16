import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataBaseService {

  baseURL='https://skillware-academy-db-default-rtdb.firebaseio.com/users/';
  constructor(private http:HttpClient) { }

  getUser(name:string):Observable<string>
  {
    if(name=='youssef')
    {
      return this.http.get<string>(this.baseURL+'1/password.json');
    }
    else if(name=='andrew')
    {
      return this.http.get<string>(this.baseURL+'2/password.json');
    }
    else if(name=='eric')
    {
      return this.http.get<string>(this.baseURL+'3/password.json');
    }
    else 
    {
      return EMPTY;
    }
  }

}
