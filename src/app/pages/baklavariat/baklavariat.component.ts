import { Component } from '@angular/core';
import { TuiIcon, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiCardLarge, TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-baklavariat',
  standalone: true,
  imports: [TuiCardLarge, TuiTitle, TuiSurface, TuiHeader, TuiIcon],
  templateUrl: './baklavariat.component.html',
  styleUrl: './baklavariat.component.scss',
})
export class BaklavariatComponent {}
