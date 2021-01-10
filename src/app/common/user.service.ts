import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: TUser;
  projects: TProject[];

  constructor() {
    this.user = this.getUser();
    this.projects = this.getUserProjects();
  }

  getUser(): TUser {
    return {
      uid: "BlablubHash",
      name: "Kha",
      email: "kha@kha.ke",
      projects: ['a', 'b']
    }
  }

  getUserProjects(): TProject[] {
    return [{
      pid: 'a',
      name: 'New Project',
      settings: {
          startDate: new Date,
          period: 1,
          taxSystem: 0,
          taxInterval: 0,
      },
      data: {
          expenses: [],
          revenues: [],
      }
    }]
  }
}
