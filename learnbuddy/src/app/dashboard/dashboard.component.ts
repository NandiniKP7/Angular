import { Component } from '@angular/core';
import { TodayPannelComponent } from '../today-pannel/today-pannel.component';
import { StreakPannelComponent } from '../streak-pannel/streak-pannel.component';
import { ProgressPannelComponent } from '../progress-pannel/progress-pannel.component';
import { FocusPannelComponent } from '../focus-pannel/focus-pannel.component';
import { TopicCardComponent } from '../topic-card/topic-card.component';
import { Topic2CardComponent } from '../topic2-card/topic2-card.component';
import { Topic3CardComponent } from '../topic3-card/topic3-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [TodayPannelComponent, StreakPannelComponent, ProgressPannelComponent, FocusPannelComponent,TopicCardComponent,Topic2CardComponent,Topic3CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
