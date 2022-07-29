import { AuthService } from 'src/app/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/material.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyMailComponent } from './verify-mail.component';

const routes: Routes = [{ path: '', component: VerifyMailComponent }];

@NgModule({
  declarations: [
    VerifyMailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class VerifyMailModule { }
