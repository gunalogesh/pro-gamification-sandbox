import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../Services/modal.service';

@Component({
  selector: 'app-initial-popup',
  templateUrl: './initial-popup.component.html',
  styleUrls: ['./initial-popup.component.scss'],
})
export class InitialPopupComponent implements OnInit {
  isOpen = false;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.popUpInitiator.subscribe((modelContent: boolean) => {
      if (modelContent) {
        this.isOpen = true;
      }
    });
  }

  closeDialog() {
    this.isOpen = false;
  }
}
