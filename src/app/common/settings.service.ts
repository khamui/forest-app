import { Injectable } from '@angular/core';
import { ProjectService } from 'src/app/common/project.service';
import { Observable } from 'rxjs';

@Injectable()
export class SettingsService
{
  paramsCompleted: boolean;
  ps: ProjectService;

  constructor(private projectService: ProjectService)
  {
    this.paramsCompleted = false;
    this.ps = projectService;
  }

  load(): Observable<any>
  {
    return this.ps.loadProject();
  }

  save(meta: IProjectMeta): void
  {
    this.ps.saveMeta(meta);
  }
}
