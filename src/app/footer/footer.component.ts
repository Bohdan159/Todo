import { Input, Component } from '@angular/core';
// import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'todo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private count = 0;
  // private head: HeaderComponent = new HeaderComponent();



  all() {

    // console.log(this.head.countTodos());
  }

  active() {

  }

  completed() {

  }

  clear() {

  }

}
