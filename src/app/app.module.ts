import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormForTodoComponent } from './form_for_todo/form-for-todo.component';
import { FooterComponent } from './footer/footer.component';
import { ListOfTodosComponent } from './list-of-todos/list-of-todos.component';
import { DataService } from "./services/data.service";


@NgModule({
  declarations: [
    AppComponent,
    FormForTodoComponent,
    HeaderComponent,
    FooterComponent,
    ListOfTodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
