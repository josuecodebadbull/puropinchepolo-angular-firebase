import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  loading: boolean = false;
  msgLogin: string = '';
  readonly UnSuscribe: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  forgotPassword() {

    const { forgotPasswordForm, UnSuscribe, authService } = this;
    const { email } = forgotPasswordForm.value;
    const that = this;
    that.msgLogin = '';
    that.loading = true;
    if (forgotPasswordForm.valid) {
      authService.ForgotPassword(email)
        .then(() => {
          that.msgLogin = 'Password reset email sent, check your inbox.';
          that.loading = false;
        })
        .catch((error) => {
          that.loading = false;
          that.msgLogin = error;
        });
    }
  }

}
