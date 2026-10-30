import { Component } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';

@Component({
  selector: 'app-streak-pannel',
  imports: [BadgeComponent],
  templateUrl: './streak-pannel.component.html',
  styleUrl: './streak-pannel.component.css',
})
export class StreakPannelComponent {
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
  
}
