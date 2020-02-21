import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/project-ts/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  attendanceCount;
  studentsCount;
  notificationsCount;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.studentsCount = this.dataService.getTotalNoOfStudents();
    this.notificationsCount = this.dataService.getNotificationsCount();
    this.attendanceCount = this.dataService.getAttendanceOn('21-Feb');
  }

}
