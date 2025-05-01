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
    // English questions
    {
      text: "Select the correct meaning of 'Hello'",
      options: [
        { text: 'Greeting', correct: true },
        { text: 'Goodbye', correct: false },
        { text: 'Thank you', correct: false },
        { text: 'Please', correct: false }
      ],
      language: 'en'
    },
    {
      text: "What does 'apple' refer to?",
      options: [
        { text: 'A fruit', correct: true },
        { text: 'A vegetable', correct: false },
        { text: 'An animal', correct: false },
        { text: 'A vehicle', correct: false }
      ],
      language: 'en'
    },
    // French questions
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
    {
      text: "What is 'pomme' in English?",
      options: [
        { text: 'Apple', correct: true },
        { text: 'Potato', correct: false },
        { text: 'Pear', correct: false },
        { text: 'Peach', correct: false }
      ],
      language: 'fr'
    },
    // Swahili questions
    {
      text: "What does 'Jambo' mean?",
      options: [
        { text: 'Hello', correct: true },
        { text: 'Goodbye', correct: false },
        { text: 'Thank you', correct: false },
        { text: 'Please', correct: false }
      ],
      language: 'sw'
    },
    {
      text: "What is 'ndizi' in English?",
      options: [
        { text: 'Banana', correct: true },
        { text: 'Orange', correct: false },
        { text: 'Apple', correct: false },
        { text: 'Mango', correct: false }
      ],
      language: 'sw'
    },
    // German questions
    {
      text: "What does 'Guten Tag' mean?",
      options: [
        { text: 'Good day', correct: true },
        { text: 'Good night', correct: false },
        { text: 'Thank you', correct: false },
        { text: 'Please', correct: false }
      ],
      language: 'de'
    },
    {
      text: "What is 'Apfel' in English?",
      options: [
        { text: 'Apple', correct: true },
        { text: 'Orange', correct: false },
        { text: 'Pear', correct: false },
        { text: 'Banana', correct: false }
      ],
      language: 'de'
    }
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
