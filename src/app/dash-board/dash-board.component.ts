import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  logoutSubscription:Subscription;
  constructor(private router:Router,
    private authService:AuthService,
    private loginService:LoginService) { }

  ngOnInit(): void {
  }

  logout =()=>{
    this.logoutSubscription=this.loginService.logout()
    .subscribe((response:any) => {  
    localStorage.removeItem('user');  
    this.router.navigateByUrl('/login')
    })
 
  }

}
