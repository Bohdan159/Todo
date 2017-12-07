import { Input, Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  private head: HeaderComponent = new HeaderComponent();



  all() {

    console.log(this.head.countTodos());
  }

  active() {

  }

  complete() {

  }

  clear() {

  }

}
