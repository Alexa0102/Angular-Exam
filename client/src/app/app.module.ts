import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { appInterceptorProvider } from './app.interceptor';
import { BehaviorSubject } from 'rxjs';
import { API_ERROR } from './shared/constants';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BooksModule,
    CoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
