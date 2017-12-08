///<reference path="../services/data.service.ts"/>
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { DataService } from '../services/data.service';


@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private todo: string;
  private todos: string[] = [];
  public checkValue: string;

  private count = 0;

  constructor(private dataService: DataService) {
  }

  enterPress($event) {
    const validTodo: boolean = this.todo.trim() !== '' ? true : false;
    if ($event.keyCode == '13' && validTodo) {
      // debugger; -- for debuging code
      this.dataService.changeTodo(this.todo);
      this.countTodos();
      this.todo = '';
    }
  }

  countTodos() {
    return this.count = this.todos.length;
  }
}
