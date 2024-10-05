import { CommonModule, SlicePipe } from '@angular/common';
import { IAbiturient } from '../../../types/abiturient';
import { ISpecialnost } from '../../../types/specialnost';
import { AbiturientsService } from '../../services/abiturients.service';
import { Component } from '@angular/core';
import { PreloaderComponent } from '../../components/preloader/preloader.component';

@Component({
  selector: 'app-raiting',
  imports: [CommonModule, SlicePipe, PreloaderComponent],
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss'],
  standalone: true,
})
export class RaitingComponent {
  abiturients: IAbiturient[];
  specialnosti: ISpecialnost[];

  constructor(private abiturientsService: AbiturientsService) {
    abiturientsService.getAllAbiturientsBySpecialnost().subscribe((data) => {
      this.specialnosti = data; // Предполагается, что data - это массив ISpecialnost с отсортированными абитуриентами
    });
  }

  // Сортировка абитуриентов по специальности
}
