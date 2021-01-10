import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/user.service';
import { AuthService } from  '../../common/auth.service';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [AuthService, UserService]
})
export class DashboardComponent {

  constructor(
    public as: AuthService,
    public us: UserService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log(this.us);
  }

  navigateToProject(id: string) {
    this.router.navigate(['project', id]);
  }
}
