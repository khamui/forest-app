import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService
{
  paramsCompleted: boolean;

  constructor()
  {
    this.paramsCompleted = false;
  }
}
