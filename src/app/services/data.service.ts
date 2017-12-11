import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private todoSource = new BehaviorSubject<string>('');
  currentTodo = this.todoSource.asObservable();

  constructor() {
  }

  changeTodo(todo: string) {
    this.todoSource.next(todo);
  }
}
