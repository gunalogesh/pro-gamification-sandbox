import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {
    this.modalService.modalStateData.subscribe((data: any) => {
      this.modelData = { ...data };
    });
  }
  modelData = {
    headerText: '',
    pointsText: '',
    points: '',
  };
  closeModal() {
    this.modalService.closeModal();
  }
}
