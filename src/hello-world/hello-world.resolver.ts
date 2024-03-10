import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';


//para rear las querys pero se traduce despues en la schema.gql
@Resolver()
export class HelloWorldResolver {

  @Query( () => String, { description: 'Mi primer hola mundo en gralhql', name: 'hello'} )
  helloWorld(): string{
    return 'Hola mundo';
  }

  @Query( () => Float, { name:'numeroRandon'})
  getnumber(): number {
    return Math.random() * 100;
  }

  @Query( () => Int, { name:'randomFormZeroTo'})
  getRandomFormZeroTo(
    //el type se esta computando
    //y es para cuando mandes la data desde el front tenga que enviar un tipo int si o si o tira error
    //"to" = seria el nombre del argumento y el otro "to" es como lo vas a llamar en la funcion para usarlo
    //el INT es solo de graphql
    //el nullable es para que sea opcional el de mandar el argumento
    @Args('to', { nullable: true, type: () => Int}) to: number = 9
    ): number {
    const random = Math.random();
    const randomNumber = Math.floor(random * to)
    return randomNumber;
  }
}
