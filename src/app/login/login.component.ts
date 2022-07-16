import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //name
  var1:string="";
  //password
  var2:string="";  
  var2_passCheck:string="";    
  arr:Array<{v1:string, v2:string}>=[];
  flag:boolean=false;
  
  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  
  constructor(private appServiceService:AppServiceService, private dataBaseService:DataBaseService, private router:Router) { }

  ngOnInit() 
  {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  goSignup()
  {
    this.router.navigate(['signup']);
  }

  goProfile()
  {
    if(this.var1=="youssef")
    {
      this.dataBaseService.getUser(this.var1).subscribe(
        data => 
        {
          this.var2_passCheck=data;
        }
      );

      if(this.var2_passCheck==this.var2)
      {
        this.router.navigate(['profile']);
        this.flag=true;
      }
    }
    
    else if(this.var1=="andrew")
    {
      this.dataBaseService.getUser(this.var1).subscribe(
        data => 
        {
          this.var2_passCheck=data;
        }
      );

      if(this.var2_passCheck==this.var2)
      {
        this.router.navigate(['faculties']);
        this.flag=true;
      }
    }

    else if(this.var1=="eric")
    {
      this.dataBaseService.getUser(this.var1).subscribe(
        data => 
        {
          this.var2_passCheck=data;
        }
      );

      if(this.var2_passCheck==this.var2)
      {
        this.router.navigate(['admin']);
        this.flag=true;
      }
    }

    if(this.flag)
    {
      this.arr.push({v1:this.var1, v2:"Log out"});
      this.appServiceService.passData(this.arr);
    }
  }
}
