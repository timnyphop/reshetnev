import { Component } from '@angular/core';
import { SpecialnostiService } from '../../services/specialnosti.service';
import { ISpecialnost } from '../../../types/specialnost';
import { CommonModule } from '@angular/common';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';
import { TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiChip } from '@taiga-ui/kit';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    CommonModule,
    TuiCardLarge,
    TuiSurface,
    TuiTitle,
    TuiChip,
    TuiHeader,
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  specialnosti: ISpecialnost[] = [];
}
