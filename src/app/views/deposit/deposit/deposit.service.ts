import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private snackBar: MatSnackBar ) { }

  showMesage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 1000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}
