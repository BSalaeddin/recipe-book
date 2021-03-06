import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [],
  providers: [],
})
export class ShoppingListModule {}
