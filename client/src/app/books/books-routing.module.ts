import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "../core/error/error.component";
import { AuthActivate } from "../shared/guards/auth.activate";
import { AddComponent } from "./add/add.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  {
    path: 'books',
    component: CatalogComponent,
    canActivate: [AuthActivate],
    data: {
      'guest': false,
    }

  },
  {
    path: 'books/:id',
    component: DetailsComponent,
    // canActivate: [AuthActivate],
    // data: {
    //   'guest': false,
    // }
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthActivate],
    data: {
      'guest': false,
    }
  },
  {
    path: '**',
    component: ErrorComponent,
    data: {
      title: '404 Not Found'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }