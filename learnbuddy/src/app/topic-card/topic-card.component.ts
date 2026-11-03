import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-card',
  imports: [],
  templateUrl: './topic-card.component.html',
  styleUrl: './topic-card.component.css',
})
export class TopicCardComponent {
  title: string = 'Components';
  titleSize:number=22;
  isLocked: boolean = true;
  progress:number=50
  iconUrl: string = 'book.png';
  hint: string = 'Finish earlier topics to unlock';
  text:string="Add a note..."
  getStatus() {
    if(this.progress==100)
    {
      return 'done'
    }
    else if(this.progress==0)
    {
      return 'locked'
    }
    else if(this.progress!=0 && this.progress<100){
      return'in-progress'
    }
    else{
      return'review'
    }
  }
}
