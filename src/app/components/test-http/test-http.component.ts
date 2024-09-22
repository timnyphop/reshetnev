import { Component } from '@angular/core';
import { IAbiturient } from '../../../types/abiturient';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AbiturientsService } from '../../services/abiturients.service';

@Component({
  selector: 'app-test-http',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-http.component.html',
  styleUrl: './test-http.component.scss',
})
export class TestHttpComponent {
  abiturients$: Observable<IAbiturient[]> = new Observable();

  constructor(
    private http: HttpClient,
    AbiturientsService: AbiturientsService,
  ) {}
}
