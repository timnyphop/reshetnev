import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAbiturient } from '../../types/abiturient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbiturientsService {
  abiturients$: Observable<IAbiturient[]> = new Observable();
  constructor(private http: HttpClient) {}

  getAllAbiturients() {
    return (this.abiturients$ = this.http.get<IAbiturient[]>(
      'http://localhost:3000/api/abiturients',
    ));
    console.log(this.abiturients$);
  }
}
