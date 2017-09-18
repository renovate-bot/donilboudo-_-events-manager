import { ConfirmDialogModule, DataTableModule, ConfirmationService, DropdownModule, CalendarModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EventService } from './event.service';
import { EventComponent } from './event.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';

const routes: Routes = [
    { path: 'events/new', component: EventComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ConfirmDialogModule,
    DropdownModule, 
    CalendarModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    EventsComponent, EventComponent
    ],
    providers: [ConfirmationService, EventService]
})
export class EventsModule { }
