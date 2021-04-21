import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../_services/login.service';
import { first } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  authSubscription: Subscription;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.inIntForm();
  }
  inIntForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]
    })
  }

  get f() { return this.loginForm.controls; }

  submitHandler() {
    if (this.loginForm.status === "INVALID") {
      return this.submitted = true;
    } else {
      this.authSubscription = this.authService.validate(this.loginForm.value.userName, this.loginForm.value.passWord)
        .subscribe((response: any) => {
          this.authService.setUserInfo({ 'user': response['user'] });
          this.router.navigate(['/dashBoard']);
        },
        (httpErrorResponse) => {
          console.log(httpErrorResponse);
          
        })
     
    }

  }
  ngOnDestroy() {
    if (this.authSubscription)
      this.authSubscription.unsubscribe();
  }
}
