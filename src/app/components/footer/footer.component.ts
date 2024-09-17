import { Component } from '@angular/core';
import { TuiIcon, TuiIconPipe } from '@taiga-ui/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TuiIcon, TuiIconPipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
