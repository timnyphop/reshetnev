import { CommonModule, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raiting',
  imports: [CommonModule, SlicePipe],
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.scss'],
  standalone: true,
})
export class RaitingComponent {
  students = [
    {
      name: 'Сидоров Сергей Сергеевич',
      date: '22.07.2020',
      ball: 4.75,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Иванов Иван Иванович',
      date: '15.08.2021',
      ball: 4.9,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Петров Петр Петрович',
      date: '30.06.2021',
      ball: 3.85,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Алексеев Алексей Алексеевич',
      date: '10.09.2019',
      ball: 4.45,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Васильев Василий Васильевич',
      date: '01.05.2022',
      ball: 4.6,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Николаев Николай Николаевич',
      date: '21.07.2020',
      ball: 4.35,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Григорьев Григорий Григорьевич',
      date: '13.12.2021',
      ball: 3.95,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Федоров Федор Федорович',
      date: '05.11.2021',
      ball: 4.85,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Егоров Егор Егорович',
      date: '22.02.2022',
      ball: 4.5,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Кузнецов Дмитрий Дмитриевич',
      date: '18.06.2020',
      ball: 4.0,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Андреев Андрей Андреевич',
      date: '12.07.2020',
      ball: 4.7,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Михайлов Михаил Михайлович',
      date: '30.08.2019',
      ball: 4.1,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Павлов Павел Павлович',
      date: '22.11.2020',
      ball: 4.6,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Семенов Семен Семенович',
      date: '03.03.2022',
      ball: 4.25,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Романов Роман Романович',
      date: '09.09.2019',
      ball: 4.55,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Лебедев Лев Львович',
      date: '14.01.2021',
      ball: 4.4,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Королев Дмитрий Дмитриевич',
      date: '20.04.2022',
      ball: 3.9,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Зайцев Иван Иванович',
      date: '19.07.2021',
      ball: 4.95,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Смирнов Алексей Алексеевич',
      date: '25.05.2020',
      ball: 4.2,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Волков Олег Олегович',
      date: '02.10.2021',
      ball: 4.65,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Филиппов Филипп Филиппович',
      date: '11.11.2021',
      ball: 4.3,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Трофимов Дмитрий Дмитриевич',
      date: '07.02.2020',
      ball: 4.75,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Савельев Александр Александрович',
      date: '29.09.2020',
      ball: 4.8,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Морозов Максим Максимович',
      date: '15.03.2022',
      ball: 4.35,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Ковалев Николай Николаевич',
      date: '18.08.2019',
      ball: 4.9,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Зиновьев Олег Олегович',
      date: '26.07.2021',
      ball: 4.55,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Матвеев Петр Петрович',
      date: '30.12.2020',
      ball: 4.25,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Гусев Михаил Михайлович',
      date: '20.06.2020',
      ball: 4.5,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Чернов Антон Антонович',
      date: '04.05.2021',
      ball: 4.4,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Орлов Василий Васильевич',
      date: '09.09.2020',
      ball: 4.65,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Киселев Владимир Владимирович',
      date: '14.11.2021',
      ball: 3.95,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Макаров Максим Максимович',
      date: '24.10.2020',
      ball: 4.2,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Ильин Илья Ильич',
      date: '08.06.2020',
      ball: 4.85,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Герасимов Герасим Герасимович',
      date: '02.01.2021',
      ball: 4.7,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Мельников Николай Николаевич',
      date: '30.07.2020',
      ball: 4.6,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Дмитриев Дмитрий Дмитриевич',
      date: '16.08.2021',
      ball: 4.35,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Овчинников Александр Александрович',
      date: '10.09.2020',
      ball: 4.25,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Соболев Иван Иванович',
      date: '22.04.2021',
      ball: 4.8,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },

    {
      name: 'Белоусов Олег Олегович',
      date: '06.03.2022',
      ball: 4.1,
      svo: 'Нет',
      specialnost: 'masinostroenie',
      original: false,
    },
    {
      name: 'Калинин Дмитрий Дмитриевич',
      date: '17.11.2020',
      ball: 4.65,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
    {
      name: 'Калинин Дмитрий Дмитриевич',
      date: '17.11.2020',
      ball: 4.85,
      svo: 'Да',
      specialnost: 'masinostroenie',
      original: true,
    },
  ];
  ngOnInit() {
    this.sortStudents();
  }
  //сортировку углубить знания,не понял нифига

  sortStudents() {
    if (this.students.length > 50) {
      this.students = this.students
        .sort((a, b) => b.ball - a.ball) // Сортируем по полю ball по убыванию
        .slice(0, 50); // Оставляем только первых 50 студентов
    }
    this.students.sort((a, b) => {
      // Перемещаем всех с svo: 'Да' и original: true в начало
      if (a.svo === 'Да' && a.original === true) {
        if (b.svo === 'Да' && b.original === true) {
          // Если оба имеют svo: 'Да' и original: true, сортируем по ball
          return b.ball - a.ball;
        }
        return -1;
      }
      if (b.svo === 'Да' && b.original === true) {
        return 1;
      }

      // Если оба элемента не имеют svo: 'Да' и original: true, сортируем по original
      if (b.original !== a.original) {
        return b.original ? 1 : -1;
      }

      // Если original одинаковый, сортируем по ball
      if (b.ball !== a.ball) {
        return b.ball - a.ball;
      }

      return 0; // Если все равно одинаковые, возвращаем 0
    });
  }
}
