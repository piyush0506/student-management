import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './dashboard/students/students.component';
import { StudentDetailComponent } from './dashboard/students/student-detail/student-detail.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { AttendanceComponent } from './dashboard/attendance/attendance.component';
import { AuthGuard } from './project-ts/guards/auth.guard';
import { HomeComponent } from './dashboard/home/home.component';
import { ListComponent } from './dashboard/students/list/list.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], children: [
    {path: '', component: HomeComponent},
    {path: 'students', component: StudentsComponent, children: [
      {path: '', component: ListComponent},
      {path: 'detail/:id', component: StudentDetailComponent}
    ]},
    {path: 'attendance', component: AttendanceComponent},
    {path: 'notifications', component: NotificationsComponent},
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    ListComponent,
    StudentDetailComponent,
    NotificationsComponent,
    AttendanceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
