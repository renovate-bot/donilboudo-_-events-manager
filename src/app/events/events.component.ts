import { EventService } from './event.service';
import { ConfirmationService } from 'primeng/primeng';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  constructor(private router: Router,
              private confirmationService: ConfirmationService,
              private eventService: EventService) { }

  add() {
    this.router.navigate([`events/new`]);
  }

  ngOnInit() {
  }

}
