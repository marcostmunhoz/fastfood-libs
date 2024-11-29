import { OrderStatusEnum } from '../enum/order-status.enum';
import { EntityIdValueObject } from '../value-object/entity-id.value-object';
import { MoneyValueObject } from '../value-object/money.value-object';
import { OrderItemValueObject } from '../value-object/order-item.value-object';

export type PartialOrderData = {
  customerId: string;
  customerName: string;
  items: OrderItemValueObject[];
  total: MoneyValueObject;
  status: OrderStatusEnum;
};

export type OrderData = PartialOrderData & {
  id: EntityIdValueObject;
  createdAt: Date;
  updatedAt: Date;
};
