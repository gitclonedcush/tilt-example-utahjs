import { Logger } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { CrewService } from './crew.service';
import { Crew } from './model/crew.model';

@Resolver(() => Crew)
export class CrewResolver {
  constructor(private crewService: CrewService) { }

  @Query(() => [Crew])
  async crews() {
    Logger.log('[CrewResolver] returning list of crews');

    return this.crewService.findAll();
  }
}
