import { Component, OnInit } from  '@angular/core';
import { AuthService } from  '../../common/auth.service';

@Component
({
  selector:  'app-login',
  templateUrl:  'login.component.html',
  styleUrls: ['login.component.sass'],
  providers: [AuthService]
})
export  class  LoginComponent  implements  OnInit
{
    as: AuthService;

    constructor(private  authService:  AuthService)
    {
      this.as = authService;
    }

    loginWithGoogle()
    {
      this.as.login();
    }

    ngOnInit() {}
}
