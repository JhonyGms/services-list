import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTasksInput {
  @Field()
  title: string;

  @Field()
  content?: string;
}
