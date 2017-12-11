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
  private mode = 1;

  constructor(private dataToFooter: DataToFooter, private dataToList: DataToList) {
  }

  ngOnInit() {
    this.dataToFooter.countCurrentTodo
      .subscribe(({count: countTodo, hasItem: hasItemFooter}) => {
        this.count = countTodo;
        this.hasItem = hasItemFooter;
      }).unsubscribe();
  }

  all() {
    this.mode = 1;
    this.dataToList.changeBtnMode(this.mode);
  }

  active() {
    this.mode = 2;
    this.dataToList.changeBtnMode(this.mode);
  }

  completed() {
    this.mode = 3;
    this.dataToList.changeBtnMode(this.mode);
  }
}
