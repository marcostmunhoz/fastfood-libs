import { ProductCategoryEnum } from '../enum/product-category.enum';
import { EntityIdValueObject } from '../value-object/entity-id.value-object';
import { MoneyValueObject } from '../value-object/money.value-object';
import { ProductCodeValueObject } from '../value-object/product-code.value-object';
import { ProductDescriptionValueObject } from '../value-object/product-description.value-object';
import { ProductNameValueObject } from '../value-object/product-name.value-object';

export type PartialProductData = {
  code: ProductCodeValueObject;
  name: ProductNameValueObject;
  description: ProductDescriptionValueObject;
  category: ProductCategoryEnum;
  price: MoneyValueObject;
};

export type ProductData = PartialProductData & {
  id: EntityIdValueObject;
  createdAt: Date;
  updatedAt: Date;
};
