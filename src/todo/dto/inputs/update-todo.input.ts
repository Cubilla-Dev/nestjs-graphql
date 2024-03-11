
import { Field, InputType, Int } from '@nestjs/graphql';
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from 'class-validator';

//para decirle a nest que sera un input type que seria que entraran data aca
//y aca podes hacer validaciones y eso
//podes poner el tipo de dato lo que vas a recibir
@InputType()
export class UpdateTodoInput {

    //se hace las validaciones de los datos que vas a recibir
    @Field( () => Int )
    @IsInt()
    @Min(1)
    id: number


    @Field( () => String, { description: 'What needs to be done', nullable: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @IsOptional()
    description?: string;

    @Field( () => Boolean, { nullable: true})
    @IsBoolean()
    @IsOptional()
    done?: boolean;

}