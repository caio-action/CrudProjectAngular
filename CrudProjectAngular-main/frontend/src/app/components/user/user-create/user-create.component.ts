import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  user: User = {
    name: '',
    email: ''
  }
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  
  }

  userCreate(): void {
    this.userService.create(this.user).subscribe(() => {
      this.userService.showMessage(' Usuário criado!')
      this.router.navigate(['/user'])
    })



  }
  cancel(): void {
    this.router.navigate(['/user'])
  }
}