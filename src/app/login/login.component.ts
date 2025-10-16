import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showpassowrd:boolean=false;
  loginform:FormGroup=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[0-9][a-zA]$/)]),
  });
  displaypassowrd(){
    this.showpassowrd=!this.showpassowrd;
  }
submitlogin(form:FormGroup){
  console.log(form);
}

}
