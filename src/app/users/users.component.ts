import { UserService } from './user.service';
import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent, ConfirmationService, DataTable } from 'primeng/primeng';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[] = [];

   @ViewChild('dataTable') dataTable: DataTable;
  
  constructor(private router: Router,
              private confirmationService: ConfirmationService,
              private userSerivce: UserService) { }

  getUsers() {

  }

  add() {
    this.router.navigate([`users/new`]);
  }

  edit(user: User) {
     this.router.navigate([`users/:${user.id}`]);
  }

delete(user: User) {
    this.confirmationService.confirm({
      key: 'deleteDialog',
      message: "Voulez vous supprimez vraiment?",
      accept: () => {
        this.userSerivce.deleteUser(user.id).subscribe(res => this.dataTable.reset());
            err => console.log(err);
      }
    });
  }


  ngOnInit() {
    this.users.push({id: 1, firstName: 'Fabrice', lastName: 'Ilboudo', email: 'fab@yahoo.fr', phone: '123', userName: 'don', password:'', role:''});
  }

}
