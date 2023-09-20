import { Component, OnInit } from '@angular/core';
import { Toast } from '../models/toast.interface';
import { ToasterService } from '../../Services/toaster.service';

@Component({
  selector: 'app-toaster-container',
  templateUrl: './toaster-container.component.html',
})
export class ToasterContainerComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toaster: ToasterService) {}

  ngOnInit() {
    this.toaster.toast$.subscribe((toast) => {
      this.toasts = [toast, ...this.toasts];
      setTimeout(() => this.toasts.pop(), toast.delay || 3000);
    });
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((v, i) => i !== index);
  }
}
