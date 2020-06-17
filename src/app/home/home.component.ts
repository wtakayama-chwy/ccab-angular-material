import { Component, OnInit } from '@angular/core';

import { UserService } from './service/user.service';
import { User } from './interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'ccab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  panelOpenState = false;
  users: User[] = [];
  user: User;
  filter: string = '';

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.listAllUsers()
      .subscribe(user => this.users = user)
  }

  getId(id: string) {
    this.router.navigate([`/details/${id}`])
  }
}
