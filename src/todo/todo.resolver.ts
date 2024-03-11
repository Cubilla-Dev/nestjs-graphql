import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { StatusArgs } from './dto/args/status.args'
import { AggregationsType } from './dto/types/aggregations.type';

//le decimos en que vamos a trabajar para que sea mas especifico
@Resolver( () => Todo )
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
  findAll(
    @Args() statusArgs: StatusArgs
  ): Todo[]{
    //y retornamos la funcion que esta en nuestro servicio que es la logica de negocio
    return this.todoService.findAll( statusArgs );
  }

  @Query( () => Todo, { name: 'oneTodo'})
  findOne(@Args('id', { type: () => Int}) id: number): Todo{
    return this.todoService.findOne(id)
  }

  @Mutation( () => Todo, { name: 'createTodo' })
  createTodo(
    //el primer create es lo que vas a mandar para que vean seria el typeinput personalizado
    //el segundo seria el nombre que le pones a la data que vendra para usar en la funcion
    //el tercero es typescript para decir que tipo de datos es 
      @Args('createTodoInput') createTodoInput: CreateTodoInput
  ) {
      return this.todoService.create( createTodoInput );
  }

  @Mutation( () => Todo, { name: 'updateTodo' })
  updateTodo(
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput
  ){
    return this.todoService.update(updateTodoInput.id, updateTodoInput );
  }

  @Mutation( () => Boolean)
  removeTodo(
    @Args('id',  { type: () => Int}) id: number
  ){
    return this.todoService.delete(id);
  }

  @Query( () => Int, { name: 'totalTodos' })
  totalTodos(){
    return this.todoService.totalTodos;
  }

  @Query( () => Int, { name: 'pedingTodos' })
  pendingTodos(){
    return this.todoService.pedingTodos;
  }
  
  @Query( () => Int, { name: 'completeTodos' })
  completedTodos(){
    return this.todoService.completedTodos;
  }

  @Query( () => AggregationsType )
  aggregations(): AggregationsType {
    return {
      completed: this.todoService.completedTodos,
      pending: this.todoService.pedingTodos,
      total: this.todoService.totalTodos,
      totalTodosCompleted: this.todoService.totalTodos,
    }
  }

}
