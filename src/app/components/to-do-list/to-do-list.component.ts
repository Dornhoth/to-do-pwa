import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { ToDosService } from 'src/app/services/to-dos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDos: Observable<ToDo[]>;
  newToDoTitle = '';

  constructor(
    private toDosService: ToDosService,
  ) { }

  ngOnInit() {
    this.toDos = this.toDosService.getToDos();
  }

  toDoToggled(toDo: ToDo): void {
    this.toDosService.toggleToDo(toDo).subscribe(() => {
      this.toDos = this.toDosService.getToDos();
    });
  }

  addToDo(): void {
    this.toDosService.addToDo(this.newToDoTitle).subscribe(() => {
      this.newToDoTitle = '';
      this.toDos = this.toDosService.getToDos();
    });
  }
}
