import { CommonModule, NgForOf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TuiActiveZone, TuiObscured } from '@taiga-ui/cdk';
import {
  TuiButton,
  TuiDropdown,
  TuiIcon,
  TuiIconPipe,
  TuiLink,
} from '@taiga-ui/core';
import { TuiAccordion, TuiChevron } from '@taiga-ui/kit';
import { filter } from 'rxjs';
import { TuiSidebar } from '@taiga-ui/addon-mobile';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    TuiDropdown,
    TuiButton,
    TuiChevron,
    TuiActiveZone,
    TuiObscured,
    CommonModule,
    TuiActiveZone,
    TuiAccordion,
    NgForOf,
    TuiLink,
    TuiSidebar,
    TuiIcon,
    TuiIconPipe,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected open1 = false;
  protected open2 = false;

  //logo-link-logic
  currentUrl: string = ''; // Инициализация переменной

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Подписка на изменение навигации
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentUrl = this.router.url;
        console.log(this.currentUrl);
        this.cdr.detectChanges(); // Принудительное обнаружение изменений
      });
  }
  isHomePage(): boolean {
    return this.currentUrl === '/';
  }

  //end logic logo
  protected toggleDropdown(button: number): void {
    if (button === 1) {
      this.open1 = !this.open1;
      this.open2 = false; // Закрываем второй дропдаун
    } else if (button === 2) {
      this.open2 = !this.open2;
      this.open1 = false; // Закрываем первый дропдаун
    }
  }

  protected onObscured(button: number, obscured: boolean): void {
    if (button === 1 && obscured) {
      this.open1 = false;
    } else if (button === 2 && obscured) {
      this.open2 = false;
    }
  }

  protected onActiveZone(button: number, active: boolean): void {
    if (button === 1) {
      this.open1 = active && this.open1;
    } else if (button === 2) {
      this.open2 = active && this.open2;
    }
  }
  protected open = false;

  protected readonly webApis = [
    'Common',
    'Audio',
    'Canvas',
    'Geolocation',
    'MIDI',
    'Workers',
  ];

  protected readonly taigaFamilyProducts = [
    'Taiga-UI',
    'ng-event-plugins',
    'ng-polymorpheus',
    'ng-dompurify',
  ];

  protected toggle(open: boolean): void {
    this.open = open;
  }
}
