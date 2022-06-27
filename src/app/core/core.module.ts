import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'password', component: PasswordComponent }
]

@NgModule({
  declarations: [
    LoginComponent,
    PasswordComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class CoreModule { }
