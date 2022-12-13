import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { BooksRoutingModule } from './books-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    CatalogComponent,
    AddComponent,
    DetailsComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    RouterModule,
    FormsModule,
  ],
})
export class BooksModule { }
