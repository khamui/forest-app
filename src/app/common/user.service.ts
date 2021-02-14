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

@Injectable({ providedIn: 'root' })
export class UserService
{
  user: IUser | undefined;
  api: ApiService;

  constructor(api: ApiService)
  {
    this.api = api;
    this.getUser();
  }

  getUser(): void
  {
    const user$ = this.api.readUser('LzsruTHY2HTyb6FIGTHzTPzQ4MQ2');
    user$.subscribe(({ payload }) => this.user = payload.data());
  }
}
