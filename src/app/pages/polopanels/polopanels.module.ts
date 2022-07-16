import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolopanelsComponent } from './polopanels.component';
import { RouterModule } from '@angular/router';
import { routes } from './polopanels-routes';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';



@NgModule({
  declarations: [
    PolopanelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule
  ],
})
export class PolopanelsModule { }
