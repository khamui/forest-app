import { Injectable } from  '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import firebase from 'firebase/app';

@Injectable({
    providedIn:  'root'
})
export class AuthService {
  user: any;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        console.log(user);
        console.log('LOgged in');
        // localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        console.log('not logged in');
        // localStorage.setItem('user', null);
      }
    })
  }

  async login() {
    const provider = await new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signInWithPopup(provider);
    this.router.navigate(['dashboard']);
  }

  async logout() {
    const provider = await new firebase.auth.GoogleAuthProvider();
    await this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
