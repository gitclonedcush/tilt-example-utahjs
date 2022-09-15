import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { CrewModule } from './crew/crew.module';
import { PrismaModule } from './prisma/prisma.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    CrewModule,
    PrismaModule,
    DeliveryModule,
  ],
})
export class AppModule { }
