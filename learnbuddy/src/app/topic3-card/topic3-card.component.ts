import { Component } from '@angular/core';

@Component({
  selector: 'app-topic3-card',
  imports: [],
  templateUrl: './topic3-card.component.html',
  styleUrl: './topic3-card.component.css',
})
export class Topic3CardComponent {
  isDisabled:boolean=true
  title:string="Routing"
  status:string="locked"
}
