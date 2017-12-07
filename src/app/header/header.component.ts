import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private hasItem = false;
  private todo = '';
  private todos: string[] = [];
  private edit = false;
  private todoEdit = '';
  public checkValue: string;

  private count = 0;



  // public setCountTodos(){
  //   this.countTodos++;
  // }
  // private checkArray: string[] = [];

  public addTodo() {


    this.todos.push(this.todo);
    // this.countTodos = this.todos.length;
    // console.log(this.countTodos);
  }

  enterPress($event) {
    const validTodo: boolean = this.todo.trim() !== '' ? true : false;
    if ($event.keyCode == '13' && validTodo) {
      this.hasItem = true;
      this.addTodo();
      this.countTodos();
      this.todo = '';
      // this.checkArray[this.checkArray.length - 1] = undefined;
    }
  }


  getTodos() {
    return this.todos;
  }

  countTodos(){
    return this.count = this.todos.length;
  }

  checkAll() {
    this.checkValue = this.checkValue == undefined ? 'checked' : undefined;
  }

  editMode() {
    this.edit = true;
  }

  defMode($event, id) {
    if ($event.keyCode == '13' || $event.type == 'blur') {
      this.edit = false;
      this.todo = this.todoEdit;
    }
  }

  destroy(id) {
    document.getElementById(id).remove();
    this.todos.splice(id, 1);
    console.log(document.getElementsByClassName('.item-div').length);
    if (this.todos.length == 0) {
      this.hasItem = false;
    }
    // console.log($event.target.name);  //свойство name dom-элемента
  }
}
