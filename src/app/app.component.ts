import { TuiRoot } from '@taiga-ui/core';
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './services/user-info.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { IonApp, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    FooterComponent,
    HeaderComponent,
    ContainerComponent,
    ContainerComponent,
    TuiRoot,
<<<<<<< HEAD
    IonApp,
    IonContent,
=======
    IonContent,
    IonApp,
>>>>>>> 5564dde0 (lonic rebag)
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
