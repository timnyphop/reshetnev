import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllowedAllService {
  constructor() {}
  private allowedAllOptions = false;
  setAllowedAll(bool: boolean) {
    this.allowedAllOptions = bool;
  }
  getAllowedAll() {
    if (!this.allowedAllOptions) {
      return false;
    } else {
      return true;
    }
  }
}
