import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user: User;

 fakeUser = {id: 1, firstName: 'Fabrice', lastName: 'Ilboudo', email: 'fab@yahoo.fr', phone: '123', userName: 'don', password:'', role:''};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  save(form: NgForm, user: User) {
    if (form.invalid) {
      return "";
    }

    this.router.navigate([`users`]);
    // const save = user.id ? this.userService.updateUser(user) : this.userService.addUser(user);
    // save.subscribe(() => {
    //   this.router.navigate(['staging/sources']);
    //   // this.alertService.success('COMMON.MESSAGES.SAVED');
    // }, error => console.log(error));
  }

  goBack() {
    this.router.navigate([`users`]);
  }

  ngOnInit() {
    const userId = this.route.params.map(p => p.userId);
    userId.subscribe(id => {
      if (id) {
        this.user = this.fakeUser;
      } else
        this.user = new User();
    });
  }

}
