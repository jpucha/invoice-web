import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from './user';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Users={
    username:'',
    password:''
  };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  getLogin(form: NgForm){
    console.log('form value ', form.value);
    this.loginService.getLogin(this.credentials)
    .subscribe(response => {
      alert(response.mensaje);
      console.log('Response: ' ,response);
      this.router.navigate(['/']);
    })
  }

  getToken():boolean{
    if (this.loginService.getToken() !== null){
      return true;
    }
    return false;
  }


}
