import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'todo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private todo: string;

  constructor(private dataService: DataService) {
  }

  enterPress($event) {
    const validTodo: boolean = this.todo.trim() !== '' ? true : false;
    if ($event.keyCode == '13' && validTodo) {
      this.dataService.changeTodo(this.todo);
      this.todo = '';
    }
  }
}
