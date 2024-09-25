import { CommonModule, SlicePipe } from '@angular/common';
import { IAbiturient } from '../../../types/abiturient';
import { ISpecialnost } from '../../../types/specialnost';
import { TestHttpComponent } from '../../components/test-http/test-http.component';
import { AbiturientsService } from '../../services/abiturients.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-raiting',
  imports: [CommonModule, SlicePipe, TestHttpComponent],
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss'],
  standalone: true,
})
export class RaitingComponent {
  abiturients: IAbiturient[] = [];
  specialnosti: ISpecialnost[] = [];

  constructor(private abiturientsService: AbiturientsService) {
    abiturientsService.getAllAbiturientsBySpecialnost().subscribe((data) => {
      this.specialnosti = data; // Предполагается, что data - это массив ISpecialnost
      this.specialnosti.forEach((specialnost) => {
        specialnost.abiturients = this.sortStudent(specialnost.abiturients); // Сортируем абитуриентов для каждой специальности
      });
    });
  }

  // Сортировка абитуриентов по специальности
  sortStudent(abiturients: IAbiturient[]): IAbiturient[] {
    return abiturients
      .sort((a, b) => {
        if (b.originalsertificate && !a.originalsertificate) return 1;
        if (a.originalsertificate && !b.originalsertificate) return -1;
        if (b.svo && !a.svo) return 1;
        if (a.svo && !b.svo) return -1;
        return b.averagescore - a.averagescore;
      })
      .slice(0, 50); // Срезаем до 50 абитуриентов
  }
}
