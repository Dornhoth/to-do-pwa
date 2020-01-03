import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {
  public toDos: ToDo[] = [
    {
      id: 1,
      title: 'Watch a movie',
      done: false,
    },
    {
      id: 2,
      title: 'Workout',
      done: false,
    },
    {
      id: 3,
      title: 'Cook',
      done: true,
    }
  ];

  toggleToDo(id: number): void {
    const toDo = this.toDos.find(e => e.id === id);
    if (toDo) {
      toDo.done = !toDo.done;
    }
  }

  addToDo(title: string): void {
    this.toDos.unshift({
      id: this.toDos.length + 1,
      title,
      done: false,
    });
  }
}
