import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { Toast, ToastType } from '../Components/models/toast.interface';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  subject!: BehaviorSubject<any>;
  toast$!: Observable<Toast>;
  constructor() {
    this.subject = new BehaviorSubject<any>(null);
    this.toast$ = this.subject
      .asObservable()
      .pipe(filter((toast) => toast !== null));
  }
  show(
    type: ToastType,
    title: string,
    body: string = '',
    delay: number = 3000
  ) {
    this.subject.next({ type, title, body, delay });
  }
}
