import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './../user.model'

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  user!: User[]
  displayedColumns = ['id', 'name', 'email', 'action']

  constructor(private userService: UserService) {
    this.user = [];
  }

  ngOnInit(): void {
  this.userService.read().subscribe(user => {
    this.user = user
    console.log(user)
  })
  }

}