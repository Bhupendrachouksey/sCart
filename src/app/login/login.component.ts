import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
       console.log("data", data[0].username);
       if(userName == data[0].username && password == data[0].password)
       {
      this.router.navigate(['/product']);
       }else
       {
        this.isLoginError = true;
      }
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
