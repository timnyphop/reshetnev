import { Component } from '@angular/core';
import { SpecialnostiService } from '../../services/specialnosti.service';
import { ISpecialnost } from '../../../types/specialnost';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-college',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './college.component.html',
  styleUrl: './college.component.scss',
})
export class CollegeComponent {
  specialnosti: ISpecialnost[] = [];
  constructor(private SpecialnostiService: SpecialnostiService) {
    SpecialnostiService.getAllSpecialnosti().subscribe((data) => {
      this.specialnosti = data;
    });
  }
}
