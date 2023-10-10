import { Component } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-inspect-pop-up',
  templateUrl: './inspect-pop-up.component.html',
  styleUrls: ['./inspect-pop-up.component.scss'],
})
export class InspectPopUpComponent {
  constructor(private modalService: ModalService) {}

  closeDialog() {
    this.modalService.closeNotifier.next(false);
  }
}
