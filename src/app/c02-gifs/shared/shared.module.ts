import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarGifsComponent } from './sidebar-gifs/sidebar-gifs.component';



@NgModule({
  declarations: [
    SidebarGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SidebarGifsComponent],
})
export class SharedModule { }
