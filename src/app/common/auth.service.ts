import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  // user: firebase.User;

  constructor(public afAuth: AngularFireAuth, public router: Router)
  {
    this.afAuth.authState.subscribe(user =>
      {
      if (user)
      {
        // this.user = user;
        // console.log(user);
        // console.log('LOgged in');
        // localStorage.setItem('user', JSON.stringify(this.user));
      }
      else
      {
        // localStorage.setItem('user', null);
      }
    })
  }

  async login(): Promise<void>
  {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['dashboard']);
  }

  async logout(): Promise<void>
  {
    await this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
