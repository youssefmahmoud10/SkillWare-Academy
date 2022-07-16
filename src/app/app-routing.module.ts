import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChanceComponent } from './chance/chance.component';
import { CoursesComponent } from './courses/courses.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DialogueInquiryComponent } from './dialogue-inquiry/dialogue-inquiry.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'courses', component:CoursesComponent},
  {path:'donate', component:DonateComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignUpComponent},
  {path:'profile', component:ProfileComponent},
  {path:'chance', component:ChanceComponent},
  {path:'admin', component:AdminComponent},
  {path:'faculties', component:FacultiesComponent},
  {path:'calendar', component:CalendarComponent},
  {path:'DialogueInquiry', component:DialogueInquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }