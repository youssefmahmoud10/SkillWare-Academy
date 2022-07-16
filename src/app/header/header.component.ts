import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginButton:string="Login";
  signupButton:string="Sign up";

  constructor(private router:Router, private appServiceService:AppServiceService) { }

  ngOnInit() {
    this.appServiceService.stringSubject.subscribe(
      data => 
      {
        this.loginButton = data[0].v1;
        this.signupButton = data[0].v2;
      }
    );
  }

  goHome()
  {
    this.router.navigate(['home']);
  }

  goCourses()
  {
    this.router.navigate(['courses']);
  }

  goDonate()
  {
    this.router.navigate(['donate']);
  }

  goLogin()
  { 
    if(this.loginButton=="Login")
    {
      this.router.navigate(['login']);
    }
    else
    {
      this.router.navigate(['profile']);
    } 
  }

  goSignup()
  {
    if(this.signupButton=="Sign up")
    {
      this.router.navigate(['signup']);
    }
    else
    {
      this.signupButton="Sign up";
      this.loginButton="Login";
      this.router.navigate(['home']);
    } 
  }

}
