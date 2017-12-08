import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private todoSource = new BehaviorSubject<string>('');
  currentTodo = this.todoSource.asObservable();

  private checkSource = new BehaviorSubject<string>('');
  // currentCheck = this.currentCheck.asObservable();

  constructor() {
  }

  changeTodo(todo: string) {
    this.todoSource.next(todo);
  }

  checkedAllItems(check: string) {
    this.checkSource.next(check);
  }
}
