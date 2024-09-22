import { CommonModule, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TestHttpComponent } from '../../components/test-http/test-http.component';
import { AbiturientsService } from '../../services/abiturients.service';
import { IAbiturient } from '../../../types/abiturient';

@Component({
  selector: 'app-raiting',
  imports: [CommonModule, SlicePipe, TestHttpComponent],
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss'],
  standalone: true,
})
export class RaitingComponent {
  students: IAbiturient[] = [];

  constructor(private abiturientsService: AbiturientsService) {
    this.abiturientsService.getAllAbiturients().subscribe((data) => {
      this.students = data;
      this.sortStudents(this.students);
    });
  }

  sortStudents(students: IAbiturient[]): IAbiturient[] {
    if (students.length > 50) {
      students = students
        .sort((a, b) => b.averagescore - a.averagescore) // Сортируем по полю ball по убыванию
        .slice(0, 50); // Оставляем только первых 50 студентов
    }

    return students.sort((a, b) => {
      if (a.svo && a.originalsertificate) {
        if (b.svo && b.originalsertificate) {
          return b.averagescore - a.averagescore;
        }
        return -1;
      }
      if (b.svo && b.originalsertificate) {
        return 1;
      }

      // Если оба элемента не имеют svo: 'Да' и original: true, сортируем по original
      if (b.originalsertificate !== a.originalsertificate) {
        return b.originalsertificate ? 1 : -1;
      }

      // Если original одинаковый, сортируем по averagescore
      if (b.averagescore !== a.averagescore) {
        return b.averagescore - a.averagescore;
      }

      return 0; // Если всё равно одинаковые, возвращаем 0
    });
  }
}
