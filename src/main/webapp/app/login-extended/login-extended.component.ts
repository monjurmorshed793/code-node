import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginModalComponent } from 'app/shared/login/login.component';
import { LoginService } from 'app/core/login/login.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { StateStorageService } from 'app/core/auth/state-storage.service';

@Component({
  selector: 'jhi-login-extended',
  templateUrl: './login-extended.component.html',
  styleUrls: ['./login-extended.component.scss'],
})
export class LoginExtendedComponent implements OnInit {
  username?: ElementRef;

  authenticationError = false;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [false],
  });
  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private stateStorageService: StateStorageService
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: '',
    });
  }

  login(): void {
    this.loginService
      .login({
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value,
        rememberMe: this.loginForm.get('rememberMe')!.value,
      })
      .subscribe(
        () => {
          this.authenticationError = false;
          const storedUrl = this.stateStorageService.getUrl();
          if (storedUrl) {
            this.router.navigate([storedUrl]);
          }
          // this.activeModal.close();
          if (
            this.router.url === '/account/register' ||
            this.router.url.startsWith('/account/activate') ||
            this.router.url.startsWith('/account/reset/')
          ) {
            this.router.navigate(['']);
          }
          this.router.navigate(['']);
        },
        () => (this.authenticationError = true)
      );
  }

  register(): void {
    this.router.navigate(['/account/register']);
  }

  requestResetPassword(): void {
    this.router.navigate(['/account/reset', 'request']);
  }
}
