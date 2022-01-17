import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { products } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  constructor(public authService: AuthService, private router: Router) {}
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit() {
    this.authService.anonymousLogin().then(() => this.router.navigate(['/']));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
