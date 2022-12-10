import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../materials/materials.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from '../auth/auth.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
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
    PageNotFoundComponent
  ]
})
export class CoreModule { }
