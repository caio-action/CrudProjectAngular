import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user!: User; 

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.readById(id).subscribe(user =>{
      this.user = user;

    });
    }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
    this.userService.showMessage('Usuário Atualizado')
    this.router.navigate(['/user']);  
    })
  }

    cancel(): void {
      this.router.navigate(['/user'])
    }
}
