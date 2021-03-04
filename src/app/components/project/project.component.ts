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
  current?: IProject;

  constructor
  (
    private route: ActivatedRoute,
    public as: AuthService,
    public ses: SettingsService,
    private ps: ProjectService,
  )
  {}

  ngOnInit(): void
  {
    this.route.paramMap
      .subscribe(params => this.ps.setId(params.get('id') as TPid));
    this.ps.project$
      .subscribe(({ payload }) => this.current = payload.data());
  }
}
