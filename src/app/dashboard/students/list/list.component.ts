import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/project-ts/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  studentsList: any[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.studentsList = this.dataService.getStudentsList();
  }

  sortList(event){
    this.studentsList.sort((a, b) => {
      if (a[event.target.value] < b[event.target.value]) {
        return -1;
      } else if (a[event.target.value] > b[event.target.value]) {
          return 1;
      } else {
          return 0;
      }
    });
  }

  filterList(event){
    var allStudents = this.dataService.getStudentsList();
    this.studentsList = allStudents.filter((student) => {
      return student.name.includes(event.target.value);
    });
  }
}
