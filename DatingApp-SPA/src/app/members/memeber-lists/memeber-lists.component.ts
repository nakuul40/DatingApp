import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-memeber-lists',
  templateUrl: './memeber-lists.component.html',
  styleUrls: ['./memeber-lists.component.css']
})
export class MemeberListsComponent implements OnInit {
  users: User[];

  constructor( private userService: UserService ,  private alertify: AlertifyService) {}
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }

}