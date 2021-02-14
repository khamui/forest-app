import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../common/auth.service';
import { SettingsService } from 'src/app/common/settings.service';
import { ProjectService } from 'src/app/common/project.service';

@Component
({
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.sass'],
  providers:
  [
    AuthService,
    SettingsService,
    ProjectService
  ]
})
export class ProjectComponent implements OnInit
{
  id?: TPid;
  current?: IProject;

  constructor
  (
    private route: ActivatedRoute,
    public as: AuthService,
    public ses: SettingsService,
    private ps: ProjectService,
  )
  {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void
  {
    this.ps.project
      .subscribe(({ payload }) => this.current = payload.data());
  }
}
