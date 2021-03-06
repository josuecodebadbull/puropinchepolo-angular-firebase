import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { AuthService } from 'src/app/services/auth.service';
import { MaterialModule } from 'src/app/common/material.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: SignUpComponent }];

@NgModule({
  declarations: [
    SignUpComponent
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
export class SignUpModule { }
