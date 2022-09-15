import { Module } from '@nestjs/common';
import { DeliveryResolver } from './delivery.resolver';
import { DeliveryService } from './delivery.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [DeliveryResolver, DeliveryService],
  imports: [PrismaModule],
})
export class DeliveryModule { }
