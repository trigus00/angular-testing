import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users!: object[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.all().subscribe(res => {
      this.users = res;
    });
  }

}
