import { Component, createPlatform, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  loading: boolean = false;
  msgLogin: string = '';
  readonly UnSuscribe: Subject<void> = new Subject<void>();

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private navegateToDasboard() {
    this.router.navigate(['']);
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['j.casasola.lopez@gmail.com', [Validators.required, Validators.email]],
      password: ['Josue2804.', [Validators.required]]
    })
  }

  login() {
    const { loginForm, UnSuscribe, authService } = this;
    const { email, password } = loginForm.value;
    const that = this;
    that.msgLogin = '';
    that.loading = true;
    if (loginForm.valid) {
      authService.SignIn(email, password).then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['panel']);
          that.msgLogin = 'login';
        });
        that.loading = false;
        console.log(result.user);
      })
        .catch((error) => {
          that.loading = false;
          that.msgLogin = error.message;
        })

    }
  }

}
