import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/common/api.service';

@Injectable({ providedIn: 'root' })
export class ProjectService
{
  id: TPid = '';
  project: Observable<any> = <Observable<IProject>>{};

  constructor(private api: ApiService)
  {}

  public setId(id: TPid): void
  {
    this.id = id;
    this.getProject();
  }

  getProject(): void
  {
    this.project = this.api.readProject(this.id);
  }

  saveMeta(meta: IProjectMeta): void
  {
    let project: IProject = <IProject>{};
    // TODO: Handle "data" part, not  always empty!
    project = { ...meta, data: { expenses: [], revenues: [] } };
    this.api.add(project, 'projects');
  }
}