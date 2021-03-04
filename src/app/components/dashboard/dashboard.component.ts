import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/common/user.service';
import { ProjectService } from 'src/app/common/project.service';
import { Router } from '@angular/router';

@Component
({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.sass'],
  providers: [UserService, ProjectService]
})
export class DashboardComponent implements OnInit
{
  constructor
  (
    private us: UserService,
    public ps: ProjectService,
    private router: Router,
  ){}

  ngOnInit(): void
  {
    this.us.user$
      .subscribe(({ payload }) =>
      {
        const user = payload.data();
        user && this.ps.loadProjects(user.projects);
      });
  }

  navigateTo(project: TPid): void
  {
    this.router.navigate(['project', project]);
  }
}
