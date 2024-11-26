import {
  EntityIdValueObject,
  MoneyValueObject,
  PartialProductData,
  ProductCategoryEnum,
  ProductCodeValueObject,
  ProductData,
  ProductDescriptionValueObject,
  ProductNameValueObject,
} from '@/domain';

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
