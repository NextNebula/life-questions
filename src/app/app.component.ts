import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { questions } from './questions';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('headerTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('header2Trigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('answerButtonTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('answerTextTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]), ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  hasStarted = false;
  showQuestion = false;
  question = '';

  ngAfterViewInit(): void {
    setInterval(() => {
      console.log('Run')
      this.container.nativeElement.style.backgroundPosition = `${Math.floor(Math.random() * 100)}% ${Math.floor(Math.random() * 100)}%`;
    }, 8000)
  }

  handleStart = () => {
    this.hasStarted = true;
    setTimeout(() => { 
      this.setQuestion();
      this.showQuestion = true;
    }, 200);
  }

  handleAnswerChange = () => {
    this.showQuestion = false;
    setTimeout(() => { 
      this.setQuestion();
      this.showQuestion = true;
    }, 200);
  }

  setQuestion = () => {
    this.question = questions[Math.floor(Math.random() * questions.length)];
  }
}
