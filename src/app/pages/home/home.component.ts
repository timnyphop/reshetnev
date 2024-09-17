import { CommonModule, isPlatformBrowser, NgFor } from '@angular/common';
import {
  Component,
  inject,
  PLATFORM_ID,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';
import { TuiButton, TuiCalendar } from '@taiga-ui/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { MapComponent } from '../../components/map/map.component';
import { MilitaryComponent } from '../../components/military/military.component';

@Component({
  standalone: true,
  exportAs: 'Example1',
  imports: [
    CommonModule,
    BannerComponent,
    AboutUsComponent,
    PartnersComponent,
    MapComponent,
    MilitaryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
