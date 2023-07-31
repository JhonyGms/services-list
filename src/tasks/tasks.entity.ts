import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Tasks {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;
}
