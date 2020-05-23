import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user.model';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit, OnDestroy {
 users: object;
 term: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.fetch();
    this.userService.userFetcher.subscribe((data) => {
      this.users = data;
    });
  }

  ngOnDestroy() {
    this.userService.userFetcher.unsubscribe();
  }
}
