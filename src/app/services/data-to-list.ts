import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataToList {

  private btnModeSource = new BehaviorSubject<number>(0);
  btnModeCurrent = this.btnModeSource.asObservable();

  constructor() {
  }

  changeBtnMode(mode: number) {
    this.btnModeSource.next(mode);
  }
}
