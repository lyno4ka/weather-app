import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class RegistrationComponent implements OnInit {
  nameFormGroup: FormGroup;
  ageFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  password1FormGroup: FormGroup;
  password2FormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.nameFormGroup = this.fb.group({
      name: ['', [Validators.required]]
    });
    this.ageFormGroup = this.fb.group(({
      age: ['', []]
    }))
    this.emailFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.password1FormGroup = this.fb.group({
      password1: ['', [Validators.required,  Validators.minLength(6)]]
    });
    this.password2FormGroup = this.fb.group({
      password2: ['', [Validators.required,  Validators.minLength(6)]]
    });
  }

}
