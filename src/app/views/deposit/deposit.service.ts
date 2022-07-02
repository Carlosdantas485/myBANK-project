import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Deposit } from './deposit.model';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  BASE_URL = "http://localhost:8080/deposits";

  constructor(private snackBar: MatSnackBar, private http: HttpClient ) { }

  showMesage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 900,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(deposit: Deposit): Observable<Deposit>{
    return this.http.post<Deposit>(this.BASE_URL, deposit)
  }

  readDeposits(): Observable<Deposit[]>{
    return this.http.get<Deposit[]>(this.BASE_URL)
  }

}
