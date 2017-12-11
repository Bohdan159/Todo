import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormForTodoComponent } from './form_for_todo/form-for-todo.component';
import { FooterComponent } from './footer/footer.component';
import { ListOfTodosComponent } from './list-of-todos/list-of-todos.component';
import { DataService } from './services/data.service';
import { DataToFooter } from './services/data-to-footer';
import { DataToList } from './services/data-to-list';


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
  providers: [DataService, DataToFooter, DataToList],
  bootstrap: [AppComponent]
})
export class AppModule { }
