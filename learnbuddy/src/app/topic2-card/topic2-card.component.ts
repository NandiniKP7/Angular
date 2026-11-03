import { Component } from '@angular/core';

@Component({
  selector: 'app-topic2-card',
  imports: [],
  templateUrl: './topic2-card.component.html',
  styleUrl: './topic2-card.component.css',
})
export class Topic2CardComponent {
  isDisabled:boolean=false
  title:string="Property Binding"
  status:string="review"
}

