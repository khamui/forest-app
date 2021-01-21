import { NgModule } from '@angular/core';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';

import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../../../environments/environment';

@NgModule
({
  imports:
  [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  exports:
  [
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [],
})

export class FirebaseModule { }
