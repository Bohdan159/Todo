import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataToList {

  private btnModeSource = new BehaviorSubject<any>({allTodo: true, activeTodo: false, completedTodo: false});
  btnModeCurrent = this.btnModeSource.asObservable();

  constructor() {
  }

  changeBtnMode(allTodo: boolean, activeTodo: boolean, completedTodo: boolean) {
    this.btnModeSource.next({allTodo, activeTodo, completedTodo});
  }
}
