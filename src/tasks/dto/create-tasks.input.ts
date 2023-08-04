import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateTasksInput {
  @MinLength(3, {
    message: 'Titulo corto',
  })
  @MaxLength(100, {
    message: 'Titulo largo',
  })
  @IsNotEmpty()
  @Field()
  title: string;

  @MaxLength(400)
  @Field({ nullable: true })
  content?: string;
}
