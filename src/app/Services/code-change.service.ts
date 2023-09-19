// code-change.service.ts
import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class CodeChangeService {
  constructor(public modalService: ModalService) {}

  detectCodeChangeOrSave() {
    this.modalService.modalStateData.next({
      headerText: 'Booked Successfully',
      pointsText: 'Points',
      points: '100',
    });
    this.modalService.openModal();
  }
  codeChanged(key: string, newCode: any, oldCode: any) {
    let lastIndex = oldCode[key]?.length - 1;
    let current = JSON.stringify(newCode);
    let previous = JSON.stringify(oldCode[key][lastIndex]);
    if (current === previous) {
      oldCode[key].push(newCode);
      return false;
    }

    this.detectCodeChangeOrSave();
    oldCode[key].push(newCode);
    sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));
    console.log('code changed');

    return true;
  }

  trackCode(newCode: any, key: string) {
    let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');

    if (!oldCode[key]?.length) {
      oldCode[key] = [];
      oldCode[key].push(newCode);
      sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));

      return false;
    } else if (oldCode[key]?.length >= 1) {
      return this.codeChanged(key, newCode, oldCode);
    }

    return true;
  }
}
