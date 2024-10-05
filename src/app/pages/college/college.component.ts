import { Component } from '@angular/core';
import { SpecialnostiService } from '../../services/specialnosti.service';
import { ISpecialnost } from '../../../types/specialnost';
import { CommonModule } from '@angular/common';
import { PreloaderComponent } from '../../components/preloader/preloader.component';

@Component({
  selector: 'app-college',
  standalone: true,
  imports: [CommonModule, PreloaderComponent],
  templateUrl: './college.component.html',
  styleUrl: './college.component.scss',
})
export class CollegeComponent {
  specialnosti: ISpecialnost[] = [];
  loading = true;
  constructor(private SpecialnostiService: SpecialnostiService) {
    SpecialnostiService.getAllSpecialnosti().subscribe((data) => {
      this.specialnosti = data;
      this.loading = !this.loading;
    });
  }
}
