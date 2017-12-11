import { Component, OnInit } from '@angular/core';
import { DataToFooter } from '../services/data-to-footer';
import { DataToList } from '../services/data-to-list';


@Component({
  selector: 'todo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private count = 0;
  private hasItem: boolean;
  private allTodo = true;
  private activeTodo = false;
  private completedTodo = false;

  constructor(private dataToFooter: DataToFooter, private dataToList: DataToList) {
  }

  ngOnInit() {
    this.dataToFooter.countCurrentTodo
      .subscribe(({count: countTodo, hasItem: hasItemFooter}) => {
        this.count = countTodo;
        this.hasItem = hasItemFooter;
      });
  }

  all() {
    this.allTodo = true;
    this.activeTodo = false;
    this.completedTodo = false;
    this.dataToList.changeBtnMode(this.allTodo, this.activeTodo, this.completedTodo);
  }

  active() {
    this.allTodo = false;
    this.activeTodo = true;
    this.completedTodo = false;
    this.dataToList.changeBtnMode(this.allTodo, this.activeTodo, this.completedTodo);
  }

  completed() {
    this.allTodo = false;
    this.activeTodo = false;
    this.completedTodo = true;
    this.dataToList.changeBtnMode(this.allTodo, this.activeTodo, this.completedTodo);
  }
}
