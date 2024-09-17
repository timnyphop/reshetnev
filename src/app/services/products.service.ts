import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Injectable, ɵɵreadContextLet } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product';
const b = '10';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products/', {
      params: new HttpParams({
        fromString: `limit=${b}`,
      }),
    });
  }
}
