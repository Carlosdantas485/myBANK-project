import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "http://localhost:8080/users";

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMesage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 900,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(user: User): Observable<User>{
    return this.http.post<User>(this.BASE_URL, user)
  }

  readUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL)
  }

  readUsersbyID(id: string): Observable<User>{
    const url = `${this.BASE_URL}/${id}`
    return this.http.get<User>(url)
  }
 

}
