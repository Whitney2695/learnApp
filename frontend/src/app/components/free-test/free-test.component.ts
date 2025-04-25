import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-free-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './free-test.component.html',
  styleUrl: './free-test.component.css'
})
export class FreeTestComponent {
  selectedLanguage: string = '';
  currentStep: number = 1;
  testStarted: boolean = false;
  currentQuestion: number = 0;
  score: number = 0;
  testCompleted: boolean = false;

  languages = [
    { code: 'en', name: 'English', icon: '🇬🇧' },
    { code: 'sw', name: 'Kiswahili', icon: '🇹🇿' },
    { code: 'fr', name: 'French', icon: '🇫🇷' },
    { code: 'de', name: 'German', icon: '🇩🇪' }
  ];

  questions = [
    {
      text: "Select the correct translation for 'Hello'",
      options: [
        { text: 'Bonjour', correct: true },
        { text: 'Au revoir', correct: false },
        { text: 'Merci', correct: false },
        { text: 'S\'il vous plaît', correct: false }
      ],
      language: 'fr'
    },
    // Add more questions here
  ];

  selectLanguage(langCode: string) {
    this.selectedLanguage = langCode;
    this.currentStep = 2;
  }

  startTest() {
    this.testStarted = true;
    this.currentStep = 3;
  }

  answerQuestion(isCorrect: boolean) {
    if (isCorrect) {
      this.score++;
    }
    
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      this.testCompleted = true;
      this.currentStep = 4;
    }
  }

  getCurrentQuestions() {
    return this.questions.filter(q => q.language === this.selectedLanguage);
  }

  restartTest() {
    this.selectedLanguage = '';
    this.currentStep = 1;
    this.testStarted = false;
    this.currentQuestion = 0;
    this.score = 0;
    this.testCompleted = false;
  }
}
