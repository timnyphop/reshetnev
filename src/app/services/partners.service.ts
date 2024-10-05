import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartners } from '../../types/partners';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  partners$: Observable<IPartners[]> = new Observable();
  constructor(private http: HttpClient) {}
  getAllPartners(): Observable<IPartners[]> {
    return (this.partners$ = this.http.get<IPartners[]>(
      'http://192.168.31.107:3000/api/partners',
    ));
  }
}
