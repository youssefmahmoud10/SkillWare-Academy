import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  public stringSubject = new Subject<Array<{v1:string, v2:string}>>();

  passData(data:Array<{v1:string, v2:string}>) 
  {
    this.stringSubject.next(data);
  }

}