import { Component, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Registration } from '../registrationmodels';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  @Input()
  regInfo!: Registration

  @Output()
  newRegistration = new Subject<Registration>();

  regForm!: FormGroup;

  private fb = inject(FormBuilder);
  private regSvc = inject(RegistrationService);

ngOnInit(): void{
  this.regForm = this.createRegistrationForm();

  //check if there is a way to pass in data to register with suggestions
  if (!!this.regForm){
    this.populateForm(this.regInfo);
  }

}

populateForm(data: Registration) {
  this.regForm.get('email')?.setValue(this.regInfo.email)
  this.regForm.get('username')?.setValue(this.regInfo.username)
  this.regForm.get('password')?.setValue(this.regInfo.password)
}

performReg(){
  const form: Registration = this.regForm.value;
  console.info('form: ', form);
  this.newRegistration.next(form);
}

private createRegistrationForm(){
  return this.fb.group({
    email: this.fb.control<string>('',[Validators.required, Validators.email]),
    username: this.fb.control<string>('',[Validators.required, Validators.minLength(5)]),
    password: this.fb.control<string>('',[Validators.required,Validators.minLength(5)])
  })
}

}
