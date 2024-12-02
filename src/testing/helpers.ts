import {
  EntityIdValueObject,
  ItemQuantityValueObject,
  MoneyValueObject,
  PartialProductData,
  ProductCategoryEnum,
  ProductCodeValueObject,
  ProductData,
  ProductDescriptionValueObject,
  ProductNameValueObject,
} from '../domain';
import { OrderData, PartialOrderData } from '../domain/data/order.data';
import { PartialPaymentData, PaymentData } from '../domain/data/payment.data';
import { OrderStatusEnum } from '../domain/enum/order-status.enum';
import { PaymentMethodEnum } from '../domain/enum/payment-method.enum';
import { PaymentStatusEnum } from '../domain/enum/payment-status.enum';
import { OrderItemValueObject } from '../domain/value-object/order-item.value-object';

export const getValidProductEntityId = (): EntityIdValueObject =>
  EntityIdValueObject.create('product-id');

export const getValidProductCode = (): ProductCodeValueObject =>
  ProductCodeValueObject.create('CODE123');

export const getValidProductName = (): ProductNameValueObject =>
  ProductNameValueObject.create('Some Product');

export const getValidProductDescription = (): ProductDescriptionValueObject =>
  ProductDescriptionValueObject.create('Some Product Description');

export const getValidMoney = (): MoneyValueObject =>
  MoneyValueObject.create(1234);

export const getValidProductCategory = (): ProductCategoryEnum =>
  ProductCategoryEnum.FOOD;

export const getValidOrderEntityId = (): EntityIdValueObject =>
  EntityIdValueObject.create('order-id');

export const getValidOrderCustomerId = (): string => 'mock-id';

export const getValidOrderCustomerName = (): string => 'John Doe';

export const getValidOrderItem = (): OrderItemValueObject =>
  OrderItemValueObject.create({
    code: getValidProductCode().value,
    name: getValidProductName().value,
    price: MoneyValueObject.create(1000),
    quantity: ItemQuantityValueObject.create(1),
  });

export const getValidOrderTotal = (): MoneyValueObject =>
  MoneyValueObject.create(1000);

export const getValidPaymentEntityId = (): EntityIdValueObject =>
  EntityIdValueObject.create('payment-id');

export const getValidPaymentOrderId = (): EntityIdValueObject =>
  EntityIdValueObject.create('order-id');

export const getValidPaymentTotal = (): MoneyValueObject =>
  MoneyValueObject.create(1000);

export const getValidPaymentMethod = (): PaymentMethodEnum =>
  PaymentMethodEnum.CREDIT_CARD;

export const getValidPaymentStatus = (): PaymentStatusEnum =>
  PaymentStatusEnum.PENDING;

export const getValidPaymentExternalId = (): string => 'external-id';

export const getPartialProductData = (): PartialProductData => ({
  code: getValidProductCode(),
  name: getValidProductName(),
  description: getValidProductDescription(),
  category: getValidProductCategory(),
  price: getValidMoney(),
});

export const getCompleteProductData = (): ProductData => ({
  id: getValidProductEntityId(),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...getPartialProductData(),
});

export const getPartialOrderData = (): PartialOrderData => ({
  customerId: getValidOrderCustomerId(),
  customerName: getValidOrderCustomerName(),
  items: [getValidOrderItem()],
  total: getValidOrderTotal(),
  status: OrderStatusEnum.PENDING,
});

export const getCompleteOrderData = (): OrderData => ({
  id: getValidOrderEntityId(),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...getPartialOrderData(),
});

export const getPartialPaymentData = (): PartialPaymentData => ({
  orderId: getValidPaymentOrderId().value,
  total: getValidPaymentTotal(),
  paymentMethod: getValidPaymentMethod(),
  status: getValidPaymentStatus(),
  externalPaymentId: getValidPaymentExternalId(),
});

export const getCompletePaymentData = (): PaymentData => ({
  id: getValidPaymentEntityId(),
  createdAt: new Date(),
  updatedAt: new Date(),
  ...getPartialPaymentData(),
});
