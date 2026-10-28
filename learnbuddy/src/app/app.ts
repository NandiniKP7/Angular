import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('LearnBuddy: My Learning');
  username: string = 'Nandini';
  today: Date = new Date();

  formattedDate: string = this.today.toLocaleDateString('en-US', {
    weekday: 'short', // "Tue"
    month: 'short', // "Oct"
    day: 'numeric', // "28"
    year: 'numeric', // "2026"
  });

  currentTopic: number = 3;
  totalTopics: number = 44;
  streakDays: number = 3;
  totalStreakDays: number = 7;
  todayMinutes: number = 45;

  getTimeText() {
    let calc = this.todayMinutes / 60;
    let hours = Math.floor(calc);
    let mins = (calc - hours) * 60;
    if (hours <=0) {
      return mins + ' minutes';
    } else {
      return hours + ' hour' + mins + ' minutes';
    }
  }

  getStreakdiff() {
    return this.totalStreakDays - this.streakDays;
  }
  getProgress() {
    return Math.round((this.currentTopic / this.totalTopics) * 100);
  }

  getGreeting() {
    if (this.today.getHours() < 12) {
      return 'GoodMorning';
    } else {
      return 'Good aftenoon';
    }
  }
}
