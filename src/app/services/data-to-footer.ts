import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataToFooter {

  private countTodoSource = new BehaviorSubject<any>({count: 0, hasItem: false});
  countCurrentTodo = this.countTodoSource.asObservable();

  constructor() {
  }

  changeCountTodo(count: number, hasItem: boolean) {
    this.countTodoSource.next({count, hasItem});
  }
}
