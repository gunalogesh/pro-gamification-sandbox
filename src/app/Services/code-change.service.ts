import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root',
})
export class CodeChangeService {
  constructor(public modalService: ModalService) {}

  codeChanged(key: string, newCode: string, oldCode: any) {
    let lastIndex = oldCode[key]?.length - 1;
    let current = newCode;
    let previous = oldCode[key][lastIndex];
    if (current === previous) {
      oldCode[key].push(newCode);
      sessionStorage.setItem('codeChanges', JSON.stringify(oldCode));
      return false;
    }
    this.modalService.codeNotifier.next(true);
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

    return true;
  }
}
