// import { InputType, Field } from '@nestjs/graphql';

// //para decirle a nest que sera un input type que seria que entraran data aca
// //y aca podes hacer validaciones y eso
// //podes poner el tipo de dato lo que vas a recibir
// @InputType()
// export class CreateTodoInput {

//   // @Field( () => String, { description: 'Data que es obligatorio mandar' })
//   // description: string;
//   @Field(() => String, { description: 'Data que es obligatorio mandar' })
//   description!: string;


// }


import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

//para decirle a nest que sera un input type que seria que entraran data aca
//y aca podes hacer validaciones y eso
//podes poner el tipo de dato lo que vas a recibir
@InputType()
export class CreateTodoInput {

    @Field( () => String, { description: 'What needs to be done' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    description: string;


}