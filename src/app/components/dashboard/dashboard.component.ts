import { Component } from '@angular/core';
import { UserService } from 'src/app/common/user.service';
import { Router } from  "@angular/router";

@Component
({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.sass'],
  providers: [UserService]
})
export class DashboardComponent
{
  constructor
  (
    public us: UserService,
    private router: Router,
  ){}

  ngOnInit(): void
  {
    console.log(this.us);
  }

  navigateTo(project: TPid)
  {
    this.router.navigate(['project', project]);
  }
}
