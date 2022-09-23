import { Logger } from '@nestjs/common';
import { Resolver, Query } from '@nestjs/graphql';
import { DeliveryService } from './delivery.service';
import { Delivery } from './model/delivery.model';

@Resolver()
export class DeliveryResolver {
  constructor(private deliveryService: DeliveryService) { }

  @Query(() => [Delivery])
  async deliveries() {
    Logger.log('[DeliveryResolver] returning list of deliveries');

    // return this.deliveryService.findAll();
    return []
  }
}
