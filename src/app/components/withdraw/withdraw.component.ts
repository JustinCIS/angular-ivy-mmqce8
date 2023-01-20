import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtmService } from '../../services/atm.service';
import { take } from "rxjs/operators";
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent implements OnInit {
  withdrawForm!: FormGroup;
  denomination: number = 10;
  hundred: number = 100;
  fifty: number = 50;
  twenty: number = 20;
  ten: number = 10;
  five: number = 5;
  one: number = 1;

  allTransactions: any[] = [];
  transactionLog: string[] = [];
  hundredsMessage: string = '';
  fiftysMessage: string = '';
  twentysMessage: string = '';
  tensMessage: string = '';
  fivesMessage: string = '';
  onesMessage: string = '';

  constructor(private fb: FormBuilder, private atmService: AtmService) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.withdrawForm = this.fb.group({
      hundred: [0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
      fifty: [0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
      twenty: [0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
      ten: [0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
      five: [0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
      one: [0, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(2)]],
    });
  }

  makeWithdrawal(){
    combineLatest(
      this.atmService.hundredsSize$,
      this.atmService.fiftysSize$,
      this.atmService.twentysSize$,
      this.atmService.tensSize$,
      this.atmService.fivesSize$,
      this.atmService.onesSize$
      ).pipe(
        take(1)
      ).subscribe(([hundredLeft, fiftyLeft, twentyLeft, tenLeft, fiveLeft, oneLeft]) => {
        this.hundredsMessage = '';
        this.fiftysMessage = '';
        this.twentysMessage = '';
        this.tensMessage = '';
        this.fivesMessage = '';
        this.onesMessage = '';

        const hundredWithdraw = this.withdrawForm.get("hundred")?.value;
        if(hundredLeft - hundredWithdraw < 0) {
          this.hundredsMessage = `Insufficient Funds!\n$${this.hundred} bills available: ${hundredLeft}\n$${this.hundred} bills attempted to withdraw: ${hundredWithdraw}`;
        } else {
          this.atmService.setHundredsSize(hundredLeft - hundredWithdraw);
          this.hundredsMessage = `Dispensed $${hundredWithdraw * this.hundred}`;
        }
        this.transactionLog.push(this.hundredsMessage);

        const fiftyWithdraw = this.withdrawForm.get("fifty")?.value;
        if(fiftyLeft - fiftyWithdraw < 0) {
          this.fiftysMessage = `Insufficient Funds!\n$${this.fifty} bills available: ${fiftyLeft}\n$${this.fifty} bills attempted to withdraw: ${fiftyWithdraw}`;
        } else {
          this.atmService.setFiftysSize(fiftyLeft - fiftyWithdraw);
          this.fiftysMessage = `Dispensed $${fiftyWithdraw * this.fifty}`;
        }
        this.transactionLog.push(this.fiftysMessage);

        const twentyWithdraw = this.withdrawForm.get("twenty")?.value;
        if(twentyLeft - twentyWithdraw < 0) {
          this.twentysMessage = `Insufficient Funds!\n$${this.twenty} bills available: ${twentyLeft}\n$${this.twenty} bills attempted to withdraw: ${twentyWithdraw}`;
        } else {
          this.atmService.setTwentysSize(twentyLeft - twentyWithdraw);
          this.twentysMessage = `Dispensed $${twentyWithdraw * this.twenty}`;
        }
        this.transactionLog.push(this.twentysMessage);

        const tenWithdraw = this.withdrawForm.get("ten")?.value;
        if(tenLeft - tenWithdraw < 0) {
          this.tensMessage = `Insufficient Funds!\n$${this.ten} bills available: ${tenLeft}\n$${this.ten} bills attempted to withdraw: ${tenWithdraw}`;
        } else {
          this.atmService.setTensSize(tenLeft - tenWithdraw);
          this.tensMessage = `Dispensed $${tenWithdraw * this.ten}`;
        }
        this.transactionLog.push(this.tensMessage);

        const fiveWithdraw = this.withdrawForm.get("five")?.value;
        if(fiveLeft - fiveWithdraw < 0) {
          this.fivesMessage = `Insufficient Funds!\n$${this.five} bills available: ${fiveLeft}\n$${this.five} bills attempted to withdraw: ${fiveWithdraw}`;
        } else {
          this.atmService.setFivesSize(fiveLeft - fiveWithdraw);
          this.fivesMessage = `Dispensed $${fiveWithdraw * this.five}`;
        }
        this.transactionLog.push(this.fivesMessage);

        const oneWithdraw = this.withdrawForm.get("one")?.value;
        if(oneLeft - oneWithdraw < 0) {
          this.onesMessage = `Insufficient Funds!\n$${this.one} bills available: ${oneLeft}\n$${this.one} bills attempted to withdraw: ${oneWithdraw}`;
        } else {
          this.atmService.setOnesSize(oneLeft - oneWithdraw);
          this.onesMessage = `Dispensed $${oneWithdraw * this.one}`;
        }
        this.transactionLog.push(this.onesMessage);

        const date: any = new Date();
        const dateString: string = date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
        const timeString: string = date.toLocaleTimeString('en-US');

        this.transactionLog.push(`${dateString} | ${timeString}`);

        this.allTransactions.push(this.transactionLog);
        this.atmService.setAllTransactions(this.allTransactions);
        this.transactionLog = [];
        this.allTransactions = [];
      })
  }

}
