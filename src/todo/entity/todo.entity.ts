import { Field, Int, ObjectType } from "@nestjs/graphql";

//esto es para que sepa que tipo de dato va a devolver nest
//podrias dejar que nest lo haga pero mayormente lo hae mal
@ObjectType()
export class Todo {

    @Field( () => Int )
    id: number;

    @Field( () => String )
    description: string;

    @Field( () => Boolean )
    done: boolean = false;

}
