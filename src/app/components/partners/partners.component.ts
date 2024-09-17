import { NgFor, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { specialnosti } from '../../data/specialnosti';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';
@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [NgFor, TuiCarousel, TuiPagination, TuiButton],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  items = [
    {
      name: 'Ростелеком',
      imgUrl:
        'https://habrastorage.org/getpro/moikrug/uploads/company/717/596/287/logo/medium_565ce8678920c5a28c3cf4977efb6408.png',
      description:
        'Выпуснкники колледжа по специальностям "Информационные технологии и программирование", имеют возможность попасть на стажировку в Ростелеком',
    },
    {
      name: 'КрасМаш',
      imgUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkQFBx7x7VTvKwHFEHYe5tdMpQGOiRJ8bmg&s',
      description:
        'Выпуснкники колледжа по специальностям "Технолгия машиностроения", имеют возможность попасть на стажировку в Красмаш',
    },
    {
      name: 'Роснефть',
      imgUrl:
        'https://yoursticker.ru/wp-content/uploads/2021/12/logotip-rosneft.jpg',
      description:
        'Выпуснкники колледжа по специальностям "Технолгия машиностроения", имеют возможность попасть на стажировку в Красмаш',
    },
  ];
  protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 6_000 : 0;
  protected index = 0;
  carouselIncrement() {
    this.index = this.index + 1;
    if (this.index === this.items.length) {
      this.index = 0;
    }
  }
  carouselDecrement() {
    this.index = this.index - 1;
  }
}
