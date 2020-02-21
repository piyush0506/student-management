import { Component } from '@angular/core';
import { MessageService } from './project-ts/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public messageService: MessageService){}
}
