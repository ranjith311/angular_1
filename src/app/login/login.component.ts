import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error = {username:"",password:""};

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.errors)
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Perform authentication logic here (e.g., call an API or service)

    // For demonstration purposes, log the credentials
    console.log('Username:', username);
    console.log('Password:', password);
    this.error.username = 'Invalid username or password';

    // You can navigate to a different page or handle login success/failure here
  }
}
