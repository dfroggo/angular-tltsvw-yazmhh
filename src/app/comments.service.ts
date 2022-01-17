import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Comment } from './comments';
//import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private db: AngularFireDatabase) {}

  postComment(comment: Comment) {
    this.db.list(comment.post + '/comments').push(comment);
  }

  getComments(postUid: string): Observable<any[]> {
    return this.db.list(postUid + '/comments').valueChanges();
  }
}
