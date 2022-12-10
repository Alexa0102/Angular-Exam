import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials/materials.module';
import { RegisterComponent } from './register/register.component';
import { LikedComponent } from './liked/liked.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LikedComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    MaterialsModule,
    HttpClientModule
  ],
})
export class AuthModule { }
