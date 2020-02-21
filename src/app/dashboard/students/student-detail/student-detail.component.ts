import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/project-ts/services/data.service';
import { MessageService } from 'src/app/project-ts/services/message.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  studentDetails: any;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) => {
      this.studentDetails = this.dataService.getStudentDetails(paramsData.id);
      if(!this.studentDetails.id){
        this.messageService.showToast("Details not found");
      }
    });    
  }

}
