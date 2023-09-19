// code-change.service.ts
import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { BehaviorSubject } from 'rxjs';
import { ToasterService } from './toaster.service';

@Injectable({
  providedIn: 'root',
})
export class CodeChangeService {
  constructor(
    public modalService: ModalService,
    public toasterService: ToasterService
  ) {}
  codeChangeNotifier = new BehaviorSubject<boolean>(false);

  detectCodeChangeOrSave() {
    this.modalService.modalStateData.next({
      headerText: 'Booked Successfully',
      pointsText: 'Points',
      points: '100',
    });
    this.modalService.openModal();
  }
  codeChanged(key: string, newCode: string, oldCode: any) {
    let lastIndex = oldCode[key]?.length - 1;
    let current = newCode;
    let previous = JSON.stringify(oldCode[key][lastIndex]);
    if (current === previous) {
      oldCode[key].push(newCode);
      return false;
    }

    this.codeChangeNotifier.next(true);
    oldCode[key].push(newCode);
    sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));

    return true;
  }

  trackCode(newCode: string, key: string) {
    let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');

    if (!oldCode[key]?.length) {
      oldCode[key] = [];
      oldCode[key].push(newCode);
      sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));

      return false;
    } else if (oldCode[key]?.length >= 1) {
      return this.codeChanged(key, newCode, oldCode);
    }

    this.toasterService.show('success', '', 'Code pasted successfully');

    return true;
  }
}
