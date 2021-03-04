import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/common/project.service';

@Injectable({ providedIn: 'root' })
export class SettingsService
{
  paramsCompleted: boolean;

  constructor(private ps: ProjectService)
  {
    this.paramsCompleted = false;
  }

  load(): Observable<any>
  {
    return this.ps.project$;
  }

  save(meta: IProjectMeta): void
  {
    this.ps.saveMeta(meta);
  }
}
