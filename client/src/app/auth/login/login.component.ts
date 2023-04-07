import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/constants';
import { errHandler } from 'src/app/shared/errorHandler';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  appEmailDomains = appEmailDomains;

  @ViewChild(
    NgForm,
    { static: true }
  ) form!: ElementRef<HTMLInputElement>;


  constructor(private authService: AuthService, private router: Router){}
  errors: string | undefined = undefined;
  loginHandler(form: NgForm): void{
    this.authService.login(form.value).subscribe({
      next: () => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.errors = errHandler(err.error?.error)
      }
    })
  }
}
