import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  signUpForm: FormGroup
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

  ngOnDestroy() {
    this.UnSuscribe.next();
    this.UnSuscribe.complete();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  createUser() {
    const { signUpForm, authService } = this;
    const { email, password } = signUpForm.value;
    const that = this;
    that.msgLogin = '';
    that.loading = true;
    if (signUpForm.valid) {
      authService.SignUp(email, password).then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        that.authService.SendVerificationMail();
        // this.SetUserData(result.user);
        that.loading = false;
      })
      .catch((error) => {
        that.loading = false;
        // window.alert(error.message);
        this.msgLogin = error.message;
      });
    }
  }

}
