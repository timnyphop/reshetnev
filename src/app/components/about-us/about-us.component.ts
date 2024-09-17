import { isPlatformBrowser, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgFor, TuiCarousel, TuiPagination, TuiButton],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 2_000 : 0;
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
  protected readonly items = [
    '10000+ трудоустроенных студентов',
    '20+ специальностей',
    '600+ бюджетных мест',
    '6 корпусов в городе Красноярск',
    '1000+ преподавателей',
    '3000+ студентов',
  ];
}
