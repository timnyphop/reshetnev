import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private userNameSubject = new BehaviorSubject<string>(this.getUserName());
  userName$ = this.userNameSubject.asObservable();

  constructor() {}
  setUserName(name: string) {
    localStorage.setItem('userName', name);
    this.userNameSubject.next(name);
  }
  private getUserName(): string {
    return localStorage.getItem('userName') || '';
  }
}
