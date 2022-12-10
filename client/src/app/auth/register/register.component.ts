import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidator } from 'src/app/shared/validators';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form!: FormGroup;
  errors: string | undefined = undefined;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: ['', [Validators.required, appEmailValidator]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      rePass: ['', [Validators.required, passwordValidator]]
    });
  }

  registerHandler(): void{
    this.authService.register(this.form.value).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errors = err.error.error
      }
    })
  }

}
