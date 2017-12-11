import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataToFooter } from '../services/data-to-footer';
import { DataToList } from '../services/data-to-list';

@Component({
  selector: 'todos',
  templateUrl: './list-of-todos.component.html',
  styleUrls: ['./list-of-todos.component.css']
})
export class ListOfTodosComponent implements OnInit {
  private hasItem = false;
  private edit = false;
  private editArray: boolean[] = [];
  private todoChange = '';
  private hasCompleted = false;
  private checkValue: string;
  private todosCurrent: string[] = [];
  private todos: string[] = [];
  private completedTodos: string[] = [];
  private activeTodos: string[] = [];
  private countTodos = 0;

  constructor(private dataService: DataService, private dataToFooter: DataToFooter, private dataToList: DataToList) {
  }

  ngOnInit() {
    this.dataService.currentTodo
      .subscribe(todo => {
        if (todo.trim() != '') {
          this.todoChange = todo;
          this.hasItem = true;
          this.addTodo();
        }
      });
    // this.dataToList.btnModeCurrent
    //   .subscribe(({allTodo: all, activeTodo: active, completedTodo: completed}) => {
    //     if (all) {
    //       this.todosCurrent = this.todos.slice();
    //     }
    //     if (active) {
    //       this.todosCurrent = this.activeTodos.slice();
    //       this.todosCurrent = this.todosCurrent.filter((value) => {
    //         if (value != '') {
    //           return value;
    //         }
    //       });
    //     }
    //     if (completed) {
    //       this.todosCurrent = this.completedTodos.slice();
    //     }
    //   });
  }

  public btnMode(){
    this.dataToList.btnModeCurrent
      .subscribe(({allTodo: all, activeTodo: active, completedTodo: completed}) => {
        if (all) {
          this.todosCurrent = this.todos.slice();
        }
        if (active) {
          this.todosCurrent = this.activeTodos.slice();
          this.todosCurrent = this.todosCurrent.filter((value) => {
            if (value != '') {
              return value;
            }
          });
        }
        if (completed) {
          this.todosCurrent = this.completedTodos.slice();
        }
      });
  }

  public addTodo() {
    this.todos.push(this.todoChange);
    this.activeTodos = this.todos.slice();
    this.editArray.push(this.edit);
    this.countTodos = this.activeTodos.length;
    this.dataToFooter.changeCountTodo(this.countTodos, this.hasItem);
    this.btnMode();
  }

  public checkAll() {
    if (this.checkValue == undefined) {
      this.checkValue = 'checked';
      this.hasCompleted = true;
      this.completedTodos = this.todos.slice();
      this.activeTodos.length = 0;
    } else {
      this.checkValue = undefined;
      this.hasCompleted = false;
      this.completedTodos = [];
      this.activeTodos = this.todos.slice();
    }
    this.countTodos = this.activeTodos.length;
    this.dataToFooter.changeCountTodo(this.countTodos, this.hasItem);
  }

  public editMode(id) {
    this.editArray[id] = true;
  }


  public defMode($event, id) {
    if ($event.keyCode == '13' || $event.type == 'blur') {
      this.editArray[id] = false;
      this.todos[id] = $event.target.value;
    }
  }

  public destroy(id) {
    this.todos.splice(id, 1);
    if (this.todos.length == 0) {
      this.hasItem = false;
    }
    this.activeTodos = this.todos.slice();
    this.countTodos = this.activeTodos.length;
    this.dataToFooter.changeCountTodo(this.countTodos, this.hasItem);
    this.btnMode();
  }

  public completedMode($event, id) {
    let count = 0;
    this.countTodos = 0;
    if ($event.target.checked === true) {
      this.hasCompleted = true;
      this.completedTodos.push(this.todos[id]);
      this.activeTodos.splice(this.todos.indexOf(this.todos[id]), 1, '');
    } else {
      this.completedTodos.splice(this.completedTodos.indexOf(this.todos[id]), 1);
      this.activeTodos[id] = this.todos[id];
      if (this.completedTodos.length === 0) {
        this.hasCompleted = false;
      }
    }
    this.activeTodos.filter((value) => {
      if (value != '') {
        count++;
      }
    });
    this.countTodos = count;
    this.dataToFooter.changeCountTodo(this.countTodos, this.hasItem);
  }

  public clear() {
    console.log(this.todos);
    this.completedTodos.forEach((value) => {
      this.todos.splice(this.todos.indexOf(value), 1);
    });
    this.completedTodos = [];
    this.btnMode();
    this.hasCompleted = false;
    if (this.todos.length == 0) {
      this.hasItem = false;
    } else {
      this.hasItem = true;
    }
    this.dataToFooter.changeCountTodo(this.countTodos, this.hasItem);
    this.checkValue = undefined;
  }
}
