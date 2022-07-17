import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/common/material.module';
import { AuthService } from 'src/app/services/auth.service';

const routes: Routes = [{ path: '', component: SignInComponent }];

@NgModule({
  declarations: [
    SignInComponent
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
export class SignInModule { }
