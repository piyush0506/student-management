import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../project-ts/services/message.service';
import { DataService } from '../project-ts/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private messageService: MessageService, private dataService: DataService) { }

  ngOnInit(): void {
    if(this.dataService.getFromStorage('token'))
      this.router.navigate(['dashboard']);
      
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  login(){
    console.log(this.form.value);
    if(this.form.value.email === 'testuser@gmail.com' && this.form.value.password === '123456'){
      this.dataService.setInStorage('token', 'dummyToken');
      this.router.navigate(['dashboard']);
    }else{
      this.messageService.showToast("Please enter correct credentials")
    }
  }

}
