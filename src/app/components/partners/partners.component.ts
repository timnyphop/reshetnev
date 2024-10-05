import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject } from '@angular/core';
import { specialnosti } from '../../data/specialnosti';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';
import { TuiButton } from '@taiga-ui/core';
import { PartnersService } from '../../services/partners.service';
import { IPartners } from '../../../types/partners';
import { PreloaderComponent } from '../preloader/preloader.component';
@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [
    NgFor,
    TuiCarousel,
    TuiPagination,
    TuiButton,
    CommonModule,
    PreloaderComponent,
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  items: IPartners[] = [];
  loading = true;
  protected duration = isPlatformBrowser(inject(PLATFORM_ID)) ? 6_000 : 0;
  protected index = 0;
  constructor(partnersService: PartnersService) {
    partnersService.getAllPartners().subscribe((data: IPartners[]) => {
      this.items = data;
      this.loading = !this.loading;
    });
  }

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
