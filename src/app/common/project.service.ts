import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/common/api.service';

@Injectable({ providedIn: 'root' })
export class ProjectService
{
  id: TPid = '';
  project$: Observable<any> = <Observable<IProject>>{};
  projects: Observable<any>[] = [];

  constructor(private api: ApiService)
  {}

  public setId(id: TPid): void
  {
    this.id = id;
    this.loadProject();
  }

  loadProject(id?: TPid): void
  {
    id
      ? this.projects.push(this.api.readProject(id))
      : this.project$ = this.api.readProject(this.id);
  }

  loadProjects(ids: TPid[]): void
  {
    for(const id of ids)
    {
      this.loadProject(id);
    }
  }

  saveMeta(meta: IProjectMeta): void
  {
    let project: IProject = <IProject>{};
    // TODO: Handle "data" part, not  always empty!
    project = { ...meta, data: { expenses: [], revenues: [] } };
    this.api.add(project, 'projects');
  }
}