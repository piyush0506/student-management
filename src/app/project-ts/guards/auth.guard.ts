import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { MessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router, private messageService: MessageService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.dataService.getFromStorage('token'))
      return true;
    else{
      this.messageService.showToast("Please login to continue");
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
