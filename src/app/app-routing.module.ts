import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './_services/auth-guard.service';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },
  { path: 'dashBoard', component: DashBoardComponent,canActivate : [AuthGuard] },
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
