import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataTableModule, ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { UsersComponent } from './users.component';
import { UserComponent } from './user.component';

const routes: Routes = [
    { path: 'users/new', component: UserComponent },
    { path: 'users/:userId', component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ConfirmDialogModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    UserComponent,
    UsersComponent
    ],
    providers: [
      ConfirmationService, UserService
    ]
})
export class UsersModule { }
