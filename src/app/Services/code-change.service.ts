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
  codeChanged(key: string, newCode: any) {
    let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');
    console.log(sessionStorage.getItem('codeChanges'));

    if (oldCode[key]?.length >= 0) {
      let lastIndex = oldCode[key]?.length - 1;

      if (newCode?.userId == oldCode[key][lastIndex - 1]?.userId) {
        return false;
      }
    }
    this.detectCodeChangeOrSave();
    return true;
  }
  trackCode(newCode: any, key: string) {
    let oldCode = JSON.parse(sessionStorage.getItem('codeChanges') ?? '{}');
    const a = this.codeChanged(key, newCode);
    console.log(newCode);
    console.log(oldCode);

    if (newCode && oldCode && a) {
      oldCode[key]?.length
        ? oldCode[key].push(newCode)
        : (oldCode[key] = [newCode]);
      sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));
    }

    return a;
  }
}
