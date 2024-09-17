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
  selector: 'app-military',
  standalone: true,
  imports: [NgFor, TuiButton, TuiCarousel, TuiPagination],
  templateUrl: './military.component.html',
  styleUrl: './military.component.scss',
})
export class MilitaryComponent {
  protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 4_000 : 0;
  protected index = 0;
  protected readonly items = [
    'https://avatars.dzeninfra.ru/get-zen_doc/9428044/pub_642696dd4c38e12608ea9abd_642696df195072042171e616/scale_1200',
    'https://avatars.dzeninfra.ru/get-zen_doc/5240577/pub_6310e2a9c21322172ffbe9c4_6310e56755099d2722c6f93d/scale_1200',
  ];
}
