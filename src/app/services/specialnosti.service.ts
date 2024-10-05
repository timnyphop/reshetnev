import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpecialnost } from '../../types/specialnost';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SpecialnostiService {
  specialnosti$: Observable<ISpecialnost[]> = new Observable();
  constructor(private http: HttpClient) {}
  getAllSpecialnosti(): Observable<ISpecialnost[]> {
    return (this.specialnosti$ = this.http.get<ISpecialnost[]>(
      'http://192.168.31.107:3000/api/specialnosti',
    ));
  }
}
