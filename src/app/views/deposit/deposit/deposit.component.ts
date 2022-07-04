import { Component, OnInit } from '@angular/core';
import { DepositService } from '../deposit.service';
import { Deposit } from '../deposit.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  deposit: Deposit = {
    dayDeposit: null,
    monthDeposit: null,
    yearDeposit: null,
    dataDeposit: null,
    dataNow: null,
    depositStatus: null,
    account: null,
    amount: null
  }
  constructor(private depositService: DepositService) { }

  ngOnInit(): void {
  }

  createDeposit():void{
    this.depositService.create(this.deposit).subscribe(()=> {
      this.depositService.showMesage("Operacao bem susedida")
    })
    
  }



}
