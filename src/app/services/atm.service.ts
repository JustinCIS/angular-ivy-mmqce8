import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';

@Injectable({
  providedIn: 'root'
})
export class AtmService {
  private _hundredsSize: BehaviorSubject<number> = new BehaviorSubject(10);
  public hundredsSize$ = this._hundredsSize.asObservable();

  private _fiftysSize: BehaviorSubject<number> = new BehaviorSubject(10);
  public fiftysSize$ = this._fiftysSize.asObservable();

  private _twentysSize: BehaviorSubject<number> = new BehaviorSubject(10);
  public twentysSize$ = this._twentysSize.asObservable();

  private _tensSize: BehaviorSubject<number> = new BehaviorSubject(10);
  public tensSize$ = this._tensSize.asObservable();

  private _fivesSize: BehaviorSubject<number> = new BehaviorSubject(10);
  public fivesSize$ = this._fivesSize.asObservable();

  private _onesSize: BehaviorSubject<number> = new BehaviorSubject(10);
  public onesSize$ = this._onesSize.asObservable();

  private _allTransactions: BehaviorSubject<any> = new BehaviorSubject([]);
  public allTransactions$ = this._allTransactions.asObservable();

  constructor() { }

  setHundredsSize(value: number){
    this._hundredsSize.next(value);
  }

  setFiftysSize(value: number){
    this._fiftysSize.next(value);
  }

  setTwentysSize(value: number){
    this._twentysSize.next(value);
  }

  setTensSize(value: number){
    this._tensSize.next(value);
  }

  setFivesSize(value: number){
    this._fivesSize.next(value);
  }

  setOnesSize(value: number){
    this._onesSize.next(value);
  }

  setAllTransactions(value: any[]){
    console.log(this._allTransactions.getValue());
    if(this._allTransactions.getValue().length > 0){
      this._allTransactions.next([...this._allTransactions.getValue(), ...value])
    }else{
      this._allTransactions.next(value);
    }
  }


  restockAll() {
    this._hundredsSize.next(10);
    this._fiftysSize.next(10);
    this._twentysSize.next(10);
    this._tensSize.next(10);
    this._fivesSize.next(10);
    this._onesSize.next(10);
  }
}
