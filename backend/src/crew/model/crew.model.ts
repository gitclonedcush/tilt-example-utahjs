import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Crew {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => [String])
  members: string[];
}
