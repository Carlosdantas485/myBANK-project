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
    account: null,
    depositStatus: null,
    dataDeposit: null,
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
