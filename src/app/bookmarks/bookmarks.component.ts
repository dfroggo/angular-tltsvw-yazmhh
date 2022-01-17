import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { products } from '../products';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  products=products
  items = this.bookmarksService.getItems();
  constructor(private bookmarksService: BookmarksService) {}

  ngOnInit(): void {}
}
