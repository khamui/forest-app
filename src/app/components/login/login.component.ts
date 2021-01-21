import { Component } from '@angular/core';
import { AuthService } from '../../common/auth.service';

@Component
({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.sass'],
  providers: [AuthService]
})
export class LoginComponent
{
    as: AuthService;

    constructor(private authService: AuthService)
    {
      this.as = authService;
    }

    loginWithGoogle(): void
    {
      this.as.login();
    }
}
