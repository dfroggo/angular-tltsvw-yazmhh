import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-post-alerts',
  templateUrl: './post-alerts.component.html',
  styleUrls: ['./post-alerts.component.css'],
})
export class PostAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
