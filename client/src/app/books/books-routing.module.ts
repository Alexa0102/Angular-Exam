import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "../core/page-not-found/page-not-found.component";
import { AuthActivate } from "../shared/guards/auth.activate";
import { AddComponent } from "./add/add.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  // {
  //   path: 'books',
  //   component: CatalogComponent,
  //   canActivate: [AuthActivate],
  //   data: {
  //     title: 'Catalog',
  //     loginRequired: true
  //   }
  // },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthActivate],
    data: {
        'guest': false,
    }
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent,
      },
      {
        path: ':id',
        component: DetailsComponent,
      },
    ]
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent,
  //   data: {
  //     title: '404 Not Found'
  //   }
  // }


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }