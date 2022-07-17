import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/common/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

const routes: Routes = [{ path: '', component: ForgotPasswordComponent}];

@NgModule({
  declarations: [
    ForgotPasswordComponent
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
export class ForgotPasswordModule { }
