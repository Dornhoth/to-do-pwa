import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoComponent } from './components/to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
