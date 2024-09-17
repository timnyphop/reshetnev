import { TuiRoot } from "@taiga-ui/core";
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './services/user-info.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';

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
      TuiRoot
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  bebrai = '';

  constructor(private userInfo: UserInfoService) {}

  ngOnInit() {
    this.userInfo.userName$.subscribe((name) => (this.bebrai = name));
  }
}
