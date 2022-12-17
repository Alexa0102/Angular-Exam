import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../materials/materials.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from '../auth/auth.service';
import { AuthActivate } from '../shared/guards/auth.activate';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  providers: [AuthActivate]
})
export class CoreModule { }
