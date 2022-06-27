import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { PasswordComponent } from './core/password/password.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'password', component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
