import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAbiturient } from '../../types/abiturient';
import { Observable } from 'rxjs';
import { ISpecialnost } from '../../types/specialnost';

@Injectable({
  providedIn: 'root',
})
export class AbiturientsService {
  abiturients$: Observable<IAbiturient[]> = new Observable();
  specialnosti$: Observable<ISpecialnost[]> = new Observable();
  constructor(private http: HttpClient) {}

  getAllAbiturientsBySpecialnost(): Observable<ISpecialnost[]> {
    return this.http.get<ISpecialnost[]>(
      'http://192.168.31.106:3000/api/specialnosti',
    );
  }
}
