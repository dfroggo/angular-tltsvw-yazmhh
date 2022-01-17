import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  items: Product[] = [];
  constructor() {}

  addToBookmarks(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeFromBookmarks() {
    this.items.pop();
  }
}
