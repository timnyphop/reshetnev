import { CommonModule, NgIf } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';
import { TuiValidator } from '@taiga-ui/cdk';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    TuiInputModule,
    TuiButton,
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    TuiValidator,
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  checked = false;
  errorMessage = '';
  // Создаем форму с валидаторами
  protected readonly form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  // Готовое решение для валидации email
  protected readonly emailValidator = Validators.email;
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      this.errorMessage = 'Please fill out the form correctly.';
      this.form.markAllAsTouched();
    }
  }
}
