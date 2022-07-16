import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goCalendar()
  {
    this.router.navigate(['calendar']);
  }

}