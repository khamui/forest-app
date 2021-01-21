import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from  '../../common/auth.service';
import { SettingsService } from 'src/app/common/settings.service';
import { UserService } from 'src/app/common/user.service';

@Component
({
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.sass'],
  providers:
  [
    AuthService,
    SettingsService,
    UserService
  ]
})
export class ProjectComponent implements OnInit
{
  pid?: TPid;
  current?: TProject;

  constructor
  (
    private route: ActivatedRoute,
    public as: AuthService,
    public ses: SettingsService,
    public us: UserService,
  ){
    this.pid = this.route.snapshot.params.id;
    this.current = this.us.projects.find(p => p.pid === this.pid);
  }

  ngOnInit(): void
  {
    console.log(this.current);
  }
}
