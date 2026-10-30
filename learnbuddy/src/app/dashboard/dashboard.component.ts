import { Component } from '@angular/core';
import { TodayPannelComponent } from '../today-pannel/today-pannel.component';
import { StreakPannelComponent } from '../streak-pannel/streak-pannel.component';
import { ProgressPannelComponent } from '../progress-pannel/progress-pannel.component';
import { FocusPannelComponent } from '../focus-pannel/focus-pannel.component';

@Component({
  selector: 'app-dashboard',
  imports: [TodayPannelComponent, StreakPannelComponent, ProgressPannelComponent, FocusPannelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
