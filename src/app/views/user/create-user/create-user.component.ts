import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: User = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    age: null,
    balance: null,
  }
  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }

  createDeposit():void{
    this.userService.create(this.user).subscribe(()=> {
      this.userService.showMesage("Operacao bem susedida")
    })
  }

}
