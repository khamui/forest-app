import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, Action, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService
{
  constructor(private afs: AngularFirestore)
  {}

  readUser(identifier: string): Observable<Action<DocumentSnapshot<IUser>>>
  {
    const userDoc: AngularFirestoreDocument<IUser>
      = this.afs.doc<IUser>(`users/${identifier}`);
    return from(userDoc.snapshotChanges());
  }

  readProject(identifier: TPid): Observable<Action<DocumentSnapshot<IProject>>>
  {
    const projectDoc: AngularFirestoreDocument<IProject>
      = this.afs.doc<IProject>(`projects/${identifier}`);
    return from(projectDoc.snapshotChanges());
  }

  add(item: any, to: any): void
  {
    const collection = this.afs.collection(to);
    item.id || (item.id = this.afs.createId());
    collection.doc(item.id).set(item);
  }
}