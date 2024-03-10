import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

  private todos: Todo[] = [
    {id: 1, description: 'Piedra de alma', done: false},
    {id: 2, description: 'Piedra de espacio', done: false},
    {id: 3, description: 'Piedra de Poder', done: true},
  ]

  //lo que vamos a devolver
  findAll(): Todo[]{
    return this.todos;
  }

  findOne(id: number): Todo{
    const todo = this.todos.find( todo => todo.id === id);

    if(!todo) throw new NotFoundException(`El todo id ${id} no encontrado`);

    return todo;
  }

}
