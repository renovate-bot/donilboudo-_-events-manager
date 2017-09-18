import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { UsersComponent } from './users/users.component';
import { EventsComponent } from './events/events.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  SharedModule, DataTableModule, PanelModule, TabMenuModule, DropdownModule,
  CalendarModule, CheckboxModule, TooltipModule, ConfirmDialogModule, ConfirmationService,
  StepsModule, SplitButtonModule, InputSwitchModule, OrderListModule
} from 'primeng/primeng';

import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'events', component: EventsComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RouterModule,
    TabMenuModule, 
    TooltipModule,
    SharedModule, 
    DataTableModule, 
    PanelModule, 
    CalendarModule, 
    CheckboxModule,
    ConfirmDialogModule, 
    DropdownModule, 
    StepsModule, 
    SplitButtonModule, 
    InputSwitchModule, 
    OrderListModule,
    RouterModule.forRoot(routes),
    UsersModule,
    EventsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
