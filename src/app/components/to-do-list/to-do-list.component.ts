import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { ToDosService } from 'src/app/services/to-dos.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  toDos: ToDo[];
  newToDoTitle = '';

  constructor(
    private toDosService: ToDosService,
  ) { }

  ngOnInit() {
    this.toDos = this.toDosService.toDos;
  }

  toDoToggled(id: number): void {
    this.toDosService.toggleToDo(id);
  }

  addToDo(): void {
    this.toDosService.addToDo(this.newToDoTitle);
    this.newToDoTitle = '';
  }
}
