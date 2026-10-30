import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-pannel',
  imports: [],
  templateUrl: './progress-pannel.component.html',
  styleUrl: './progress-pannel.component.css',
})
export class ProgressPannelComponent {
  currentTopic: number = 3;
  totalTopics: number = 44;
  getProgress() {
    return Math.round((this.currentTopic / this.totalTopics) * 100);
  }
}
