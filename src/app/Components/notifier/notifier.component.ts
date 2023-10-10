import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss'],
})
export class NotifierComponent implements OnInit {
  isOpen = false;
  modelContent = '';
  @Output() remove = new EventEmitter<boolean>();

  constructor(private modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.codeNotifier.subscribe((modelContent: string) => {
      if (modelContent) {
        this.isOpen = true;
        this.modelContent = modelContent;
      }
    });
  }

  closeDialog() {
    this.isOpen = false;
    let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');
    console.log(oldCode?.userDetails);

    if (oldCode?.userDetails?.length == 2) {
      this.modalService.closeNotifier.next(true);
    }
  }
}
