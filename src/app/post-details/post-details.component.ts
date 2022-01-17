import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product, products } from '../products';
import { BookmarksService } from '../bookmarks.service';
import { CommentsService } from '../comments.service';
import { Comment } from '../comments';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  @Input('post') post: any = null;
  product: Product | undefined;
  comment: string = '';
  userId: string;
  comments$: Observable<Comment[]> = of([]);
  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService,
    private commentsService: CommentsService,
    private auth: AuthService
  ) {
    this.userId = this.auth.currentUserId;
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );

    this.comments$ = this.commentsService.getComments(this.post.uid);
  }

  addToBookmarks(product: Product) {
    this.bookmarksService.addToBookmarks(product);
    window.alert('Your product has been added to the cart!');
  }

  postComment() {
    this.commentsService.postComment({
      date: new Date().toDateString(),
      text: this.comment,
      userId: this.userId ?? '',
      post: this.post.uid,
    });
    this.comment = '';
  }
}
