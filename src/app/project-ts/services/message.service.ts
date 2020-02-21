import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  isToastOpen: boolean = false;
  toastMessage: string = '';

  showToast(message){
    this.isToastOpen = true;
    this.toastMessage = message;

    setTimeout(() => {
      this.isToastOpen = false;
    }, 3000);
  }
}
