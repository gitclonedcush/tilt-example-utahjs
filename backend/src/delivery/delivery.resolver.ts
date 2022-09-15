import { Resolver, Query } from '@nestjs/graphql';
import { DeliveryService } from './delivery.service';
import { Delivery } from './model/delivery.model';

@Resolver()
export class DeliveryResolver {
  constructor(private deliveryService: DeliveryService) { }

  @Query(() => [Delivery])
  async deliveries() {
    return this.deliveryService.findAll();
    // return []
  }
}
