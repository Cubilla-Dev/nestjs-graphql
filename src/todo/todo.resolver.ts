import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {

  //injectamos nuestro todoservice para poder usarlo en este archivos
  //esta en privado para que solo podamos usar aca
  constructor(
    private readonly todoService: TodoService
  ){}

  //y debes de poner que devolvera un string por ejemplo podrias poner "Todo" que habias creado ya
  //diciendo que tipo de datos y que podria devolver
  //y las llaves [] son para decir que vamos a devolver 1 o muchos datos
  @Query( () => [Todo], { name: 'todos', description: 'vas a llamar a toda la data'})
  findAll(): Todo[]{
    //y retornamos la funcion que esta en nuestro servicio que es la logica de negocio
    return this.todoService.findAll();
  }

  @Query( () => Todo, { name: 'oneTodo'})
  findOne(@Args('id', { type: () => Int}) id: number): Todo{
    return this.todoService.findOne(id)
  }

  createTodo(){

  }

  updateTodo(){}

  removeTodo(){

  }


}
