import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CatalogComponent } from './books/catalog/catalog.component';
import { HomeComponent } from './core/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,

  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register',
      loginRequired: true
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login',
      loginRequired: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
