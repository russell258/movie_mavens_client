import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private httpService:HttpService){}

  loginForm!: FormGroup;
  private fb = inject(FormBuilder);

  loginDetails:any;

  ngOnInit(): void{
    this.loginDetails={
      username:"",
      password:""
    }
    this.loginForm = this.fb.group({
      username: this.fb.control<string>('',[Validators.required,Validators.minLength(5)]),
      password: this.fb.control<string>('',[Validators.required,Validators.minLength(8)])
      });
    }

    handleSubmit() {
      this.loginDetails.username = this.loginForm.value.username;
      this.loginDetails.password = this.loginForm.value.password;
      console.log(this.loginDetails);
      this.login(this.loginDetails);
    }

    login(login: any) {
      this.httpService.request("POST", "/api/login", login)
            .subscribe({
              next: (data) => {
                this.httpService.setAuthToken(data.token);
                // this.loginService.setUserData(data);
                console.log(data)
                alert("Login successful!");
                this.router.navigate(['/home'])
              },
              error: (e) => {
                this.httpService.setAuthToken(null);
                alert(e.message);
              }
            })
    }

}
