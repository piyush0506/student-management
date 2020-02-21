import { Injectable } from '@angular/core';
import { students } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  setInStorage(key, data){
    localStorage.setItem(btoa(key), btoa(data));
  }

  getFromStorage(key){
    return (localStorage.getItem(btoa(key))) ? atob(localStorage.getItem(btoa(key))) : '';
  }

  getTotalNoOfStudents(){
    return students.length;
  }

  getNotificationsCount(){
    return 0;
  }

  getStudentDetails(id){
    var index = this.getStudentsList().findIndex((student) => {
      return student.id.toString() === id.toString();
    });

    if(index != -1){
      return this.getStudentsList()[index];
    }else{
      return {};
    }
  }

  getAttendanceOn(date){
    var students = this.getStudentsList().filter((student) => {
      return student[date] === 'Yes';
    });
    return students.length
  }

  getStudentsList(){
    return students.sort((a, b) => {
      if (a['class'] < b['class']) {
        return -1;
      } else if (a['class'] > b['class']) {
          return 1;
      } else {
          return 0;
      }
    });
  }

  getDays(){
    return [
      '21-Feb', '20-Feb'
    ];
  }

  getAttendanceRecords(){
    return this.getStudentsList();
  }
}
