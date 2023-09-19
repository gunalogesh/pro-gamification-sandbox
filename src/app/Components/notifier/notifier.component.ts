import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast } from '../models/toast.interface';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.css'],
})
export class NotifierComponent {
  @Input() toast!: Toast;
  @Input() i!: number;
  @Output() remove = new EventEmitter<number>();
}
