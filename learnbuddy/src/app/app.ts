import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, FooterComponent, HeaderComponent, DashboardComponent],
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




 


  getGreeting() {
    if (this.today.getHours() < 12) {
      return 'GoodMorning';
    } else {
      return 'Good aftenoon';
    }
  }
}
