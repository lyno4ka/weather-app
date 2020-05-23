import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {User} from '../../interfaces/user.interfaces';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  authorizationForm: FormGroup;
  hide = true;
  submitted = false;
  email: FormControl = new FormControl('', [ Validators.required,
    Validators.email]);
  password: FormControl = new FormControl('', [Validators.required,
    Validators.minLength(6)]);

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private router: Router) {
    this.authorizationForm = fb.group({
      email: this.email,
      password: this.password,
    });
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePas() {
    if (this.password.hasError('required')) {
      return 'You must enter a password';
    }

    return this.password.hasError('minlength') ? `Password must be at least 
      ${this.password.errors.minlength.requiredLength} characters.
      Now it is ${this.password.errors.minlength.actualLength} characters.` : '';
  }

  submit() {
    console.log(this.authorizationForm);
    if (this.authorizationForm.invalid) {
      return;
    }

    this.submitted = true;

    const user: User = {
      email: this.authorizationForm.value.email,
      password: this.authorizationForm.value.password
    };

    console.log(user);
    this.auth.login(user).subscribe(() => {
      this.authorizationForm.reset();
      this.router.navigate(['/']);
    });
  }
}

