import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Crew } from './model/crew.model';

@Injectable()
export class CrewService {
  constructor(private readonly prismaService: PrismaService) { }

  async findAll(): Promise<Crew[]> {
    return await this.prismaService.crew.findMany();
  }
}
