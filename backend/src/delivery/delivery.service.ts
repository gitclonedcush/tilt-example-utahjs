import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Delivery } from './model/delivery.model';

@Injectable()
export class DeliveryService {
  constructor(private readonly prismaService: PrismaService) { }

  async findAll(): Promise<Delivery[]> {
    return await this.prismaService.delivery.findMany();
  }
}
