import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  //name
  var1:string=""
  //password
  var2:string=""
  //confirm password
  var3:string=""
  arr:Array<{v1:string, v2:string}>=[];

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  constructor(private appServiceService:AppServiceService, private http:HttpClient, private router:Router) { }

  ngOnInit() 
  {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  goLogin()
  {
    this.router.navigate(['login']);
  }

  goProfile()
  {
    this.arr.push({v1:this.var1, v2:"Log out"});
    this.appServiceService.passData(this.arr);
    this.router.navigate(['profile']);
    this.http.post('https://skillware-academy-db-default-rtdb.firebaseio.com/users.json', {name:this.var1, password:this.var2}).subscribe();
  }

}
