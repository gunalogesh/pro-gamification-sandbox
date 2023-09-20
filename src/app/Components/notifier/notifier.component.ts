import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast } from '../models/toast.interface';
import { ToasterService } from '../../Services/toaster.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent implements OnInit {
  isOpen = false;
  @Output() remove = new EventEmitter<boolean>();

  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.codeNotifier.subscribe((isCodeChanged: boolean) => {
      if (isCodeChanged) {
        this.isOpen = isCodeChanged;
      }
    });
  }

  closeDialog() {
    this.isOpen = false;
  }
}
