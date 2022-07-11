import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users!: User[];
  
  constructor( private userService: UserService) { }

  ngOnInit(): void { 
    this.userService.readUsers().subscribe(deposits => {
    this.users = deposits
    console.log(deposits)

    })
  }

}
