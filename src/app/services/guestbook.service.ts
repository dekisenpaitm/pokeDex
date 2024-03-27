import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { UserComment } from '../models/userComments.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {

private basePath: string = '/GuestBookEntries';

guestBookComments!:Observable<any>;

constructor(private angularService:AngularFireDatabase) {}

createEntry(entry: UserComment) {
  return this.angularService.list(this.basePath).push(entry);
}

// Get all entries
getEntries() {
  return this.angularService.list<UserComment>(this.basePath).snapshotChanges().pipe(
    map(changes =>
      changes.map(c => {
        const data = c.payload.val() as any; // Cast to 'any' to access properties directly
        return new UserComment(data.name, data.comment, data.date);
      })
    )
  );
}

}

