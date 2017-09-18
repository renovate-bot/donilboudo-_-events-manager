import { Component } from '@angular/core';
import { MenuItem, SplitButtonModule } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Manager';
  items: MenuItem[];
  profileItem: MenuItem;
  logoutItem: MenuItem;

  constructor() {
    this.logoutItem = { icon: ' fa-sign-out', label: 'Déconnexion' };
    this.profileItem = { icon: 'fa-user', label: 'Profile' };
    this.items = [this.profileItem, this.logoutItem];
  }
}
