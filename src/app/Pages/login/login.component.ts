import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from './../../Services/authentication/auth-service.service';
import { FormLoginInterface } from './Interface/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: FormGroup;

  //variáveis
  isLoggingIn = false;

  constructor(
    private authService: AuthService,
    fb: FormBuilder
    ) {
    this.loginForm = fb.group(new FormLoginInterface());
  }

  async tryLogin() {
    this.authService.login(this.loginForm);
  };

  async loginGoogle(){

  };
}
