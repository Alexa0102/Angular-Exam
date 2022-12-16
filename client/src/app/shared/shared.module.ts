import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email.directive';



@NgModule({
  declarations: [
    AppEmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AppEmailDirective,
  ]
})
export class SharedModule { }
