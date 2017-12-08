import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

class Todo {
  constructor(public todo: string, public completed: boolean, public id: number) {
  }
}

@Component({
  selector: 'todos',
  templateUrl: './list-of-todos.component.html',
  styleUrls: ['./list-of-todos.component.css']
})
export class ListOfTodosComponent implements OnInit {
  private hasItem = false;
  private edit = false;
  private editArray: boolean[] = [];
  private todoChange: string = '';
  private todoEdit = '';
  private todos: string[] = [];
  public checkValue: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.currentTodo.subscribe(todo => {
      if (todo.trim() != '') {
        this.todoChange = todo;
        this.hasItem = true;
        this.addTodo();
        console.log(this.todoChange);
      }
    });
  }

  public addTodo() {
    this.todos.push(this.todoChange);
    this.editArray.push(this.edit);
  }

  checkAll() {
    this.checkValue = this.checkValue == undefined ? 'checked' : undefined;
    this.dataService.checkedAllItems(this.checkValue);
  }

  editMode(id) {
    this.editArray[id] = true;
  }


  defMode($event, id) {
    if ($event.keyCode == '13' || $event.type == 'blur') {
      this.editArray[id] = false;
      this.todos[id] = $event.target.value;
    }
  }

  destroy(id) {
    this.todos.splice(id, 1);
    // document.getElementsByClassName('.item-div').length;
    if (this.todos.length == 0) {
      this.hasItem = false;
    }
    // console.log($event.target.name);  //свойство name dom-элемента
  }
}
