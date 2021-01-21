import { Injectable } from '@angular/core';

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
  user: TUser;
  projects: TProject[];

  constructor()
  {
    this.user = this.getUser();
    this.projects = this.getUserProjects();
  }

  getUser(): TUser
  {
    return {
      uid: 'BlablubHash',
      name: 'Kha',
      email: 'kha@kha.ke',
      projects: ['a', 'b']
    }
  }

  getUserProjects(): TProject[]
  {
    return [{
      pid: 'a',
      name: 'New Project',
      settings: {
          startDate: new Date,
          period: 1,
          taxSystem: ECountryCode.DE,
          taxInterval: ETaxInterval.MONTHLYOFF,
      },
      data: {
          expenses: [],
          revenues: [],
      }
    }]
  }
}
