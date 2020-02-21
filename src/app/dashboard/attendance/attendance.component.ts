import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/project-ts/services/data.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  days: any;
  studentsList: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.studentsList = this.dataService.getAttendanceRecords();
    this.days = this.dataService.getDays();
  }

}
