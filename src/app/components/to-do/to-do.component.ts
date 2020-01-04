import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  @Input() toDo: ToDo;
  @Output() toDoToggleEvent = new EventEmitter<ToDo>();

  changeCheckbox(): void {
    this.toDoToggleEvent.emit(this.toDo);
  }
}
