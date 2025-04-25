import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class LandingComponent {
  isDarkMode = false;
  languages = [
    { code: 'en', name: 'English', level: 'All Levels', icon: '🇬🇧' },
    { code: 'sw', name: 'Kiswahili', level: 'All Levels', icon: '🇹🇿' },
    { code: 'fr', name: 'French', level: 'All Levels', icon: '🇫🇷' },
    { code: 'de', name: 'German', level: 'All Levels', icon: '🇩🇪' }
  ];

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode');
  }
}
