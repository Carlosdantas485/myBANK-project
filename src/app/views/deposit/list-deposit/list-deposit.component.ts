import { Component, OnInit } from '@angular/core';
import { DepositService } from '../deposit.service';
import { Deposit } from '../deposit.model';

@Component({
  selector: 'app-list-deposit',
  templateUrl: './list-deposit.component.html',
  styleUrls: ['./list-deposit.component.css']
})
export class ListDepositComponent implements OnInit {

  deposits!: Deposit[];

  constructor( private depositService: DepositService) { }

  ngOnInit(): void {
    this.depositService.readDeposits().subscribe(deposits => {
      this.deposits = deposits
      console.log(deposits)

    })
  }

 

}
