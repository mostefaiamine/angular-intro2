import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';



@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class UIModule { }
