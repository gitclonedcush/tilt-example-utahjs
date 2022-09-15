import { Module } from '@nestjs/common';
import { CrewResolver } from './crew.resolver';
import { CrewService } from './crew.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [CrewResolver, CrewService],
  imports: [PrismaModule],
})
export class CrewModule { }
