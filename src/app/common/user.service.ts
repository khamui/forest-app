import { Injectable } from '@angular/core';
import { Action, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/common/api.service';

@Injectable({ providedIn: 'root' })
export class UserService
{
  user$: Observable<Action<DocumentSnapshot<IUser>>>;

  constructor(private api: ApiService)
  {
    this.user$ = this.api.readUser('LzsruTHY2HTyb6FIGTHzTPzQ4MQ2');
  }
}
