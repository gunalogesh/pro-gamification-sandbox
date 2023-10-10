import { Injectable } from '@angular/core';
import { ModalService } from './modal.service';
import { Code } from '../enum/code.enum';

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
    if (key === Code.RATING) {
      this.modalService.codeNotifier.next(
        'New Game Action Configuration Added'
      );
    } else if (key === Code.USER) {
      this.modalService.codeNotifier.next('New SandBox User  Added');
    }
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
      this.modalService.popUpInitiator.next(true);

      return false;
    } else if (oldCode[key]?.length >= 1) {
      return this.codeChanged(key, newCode, oldCode);
    }

    return true;
  }
}
