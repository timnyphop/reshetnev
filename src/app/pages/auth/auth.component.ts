import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [TuiInputModule, TuiButton, CommonModule, NgIf, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  checked = false;
  errorMessage = '';

  // Создаем форму с валидаторами
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  // Функция для генерации сообщений об ошибках
  getErrorMessage(field: string): string {
    const control = this.form.get(field);

    // Проверяем, если поле затронуто и имеет ошибки
    if (control && control.touched && control.invalid) {
      if (control.errors?.['required']) {
        return 'This field is required';
      }
      if (control.errors?.['email']) {
        return 'Please enter a valid email';
      }
      if (control.errors?.['minlength']) {
        const requiredLength = control.errors['minlength'].requiredLength;
        return `Password must be at least ${requiredLength} characters`;
      }
    }

    return '';
  }

  // Обработчик отправки формы
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.errorMessage = 'Please enter valid data.';
      this.form.markAllAsTouched(); // Отмечаем все поля как затронутые
    }
  }
}
