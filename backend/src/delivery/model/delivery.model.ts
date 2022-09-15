import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Delivery {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  destination: string;

  @Field()
  contents: string;

  @Field({ nullable: true })
  additionalInfo?: string;

  @Field()
  completed: boolean;

  @Field()
  completedAt: Date;
}
