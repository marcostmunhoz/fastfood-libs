import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';

export const validateConfig = <T>(
  cls: ClassConstructor<T>,
  properties: Record<string, any>,
) => {
  const config = plainToInstance(cls, properties, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(config as any, {
    skipMissingProperties: false,
  });

  if (errors.length) {
    throw new Error(errors.toString());
  }

  return config;
};
