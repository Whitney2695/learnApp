import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // TODO: Implement login logic
    console.log('Login attempt:', this.loginData);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
