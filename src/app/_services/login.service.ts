import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

// import { environment } from '@environments/environment';
// import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class LoginService {
    url= "http://localhost:3000";
  

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
       
    }
    public logout() {
        return this.http.post(`${this.url}/api/logout`,"logout");
     
    }
    


  
}