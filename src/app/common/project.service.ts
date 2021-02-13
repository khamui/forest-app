import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/common/api.service';

@Injectable()
export class ProjectService
{
  #api: ApiService;
  id: TPid;

  constructor(api: ApiService)
  {
    this.#api = api;
    this.id = 'Ft6eDwkG6I9Gi4Y1RZMM';
  }

  loadProject(): Observable<any>
  {
    return this.#api.readProject(this.id);
  }

  saveMeta(meta: IProjectMeta): void
  {
    let project: IProject = <IProject>{};
    // TODO: Handle "data" part, not  always empty!
    project = { ...meta, data: { expenses: [], revenues: [] } };
    this.#api.add(project, 'projects');
  }
}