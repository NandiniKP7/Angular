import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-card',
  imports: [],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.css',
})
export class TopicCardComponent {
  title: string = 'Components';
  isLocked: boolean = true;
  iconUrl: string = 'book.png';
  hint: string = 'Finish earlier topics to unlock';
  text:string="Add a note..."
  getStatus() {
    if (this.isLocked === false) {
      return 'Ready for Start';
    } else {
      return 'Locked Topic';
    }
  }
}
