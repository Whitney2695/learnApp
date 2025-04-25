import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // TODO: Implement signup logic
    console.log('Signup attempt:', this.signupData);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
