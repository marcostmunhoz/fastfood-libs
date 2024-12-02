import { PaymentMethodEnum } from '../enum/payment-method.enum';
import { PaymentStatusEnum } from '../enum/payment-status.enum';
import { EntityIdValueObject } from '../value-object/entity-id.value-object';
import { MoneyValueObject } from '../value-object/money.value-object';

export type PartialPaymentData = {
  orderId: string;
  total: MoneyValueObject;
  paymentMethod: PaymentMethodEnum;
  status: PaymentStatusEnum;
  externalPaymentId?: string;
};

export type PaymentData = PartialPaymentData & {
  id: EntityIdValueObject;
  createdAt: Date;
  updatedAt: Date;
};
