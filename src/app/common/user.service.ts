import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/common/api.service';

// Enums
enum ECountryCode {
  AT,
  BE,
  DE,
  PT
}

enum ETaxInterval {
  MONTHLY,
  MONTHLYOFF,
  TRIMESTRAL,
  YEARLY
}

@Injectable()
export class UserService
{
  user: IUser | undefined;
  projects: IProject[];
  api: ApiService;

  constructor(api: ApiService)
  {
    this.api = api;
    this.getUser();
    this.projects = this.getUserProjects();
  }

  getUser(): void
  {
    const user$ = this.api.readUser('LzsruTHY2HTyb6FIGTHzTPzQ4MQ2');
    user$.subscribe(({ payload }) => this.user = payload.data());
  }

  getUserProjects(): IProject[]
  {
    return [{
      id: 'a',
      name: 'New Project',
      settings:
      {
        startDate: new Date,
        period: 1,
        taxSystem: 'Belgium',
        taxInterval: 'monthly',
      },
      data:
      {
        expenses: [],
        revenues: [],
      }
    }]
  }
}
