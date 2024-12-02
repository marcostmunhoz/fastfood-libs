import { Column } from 'typeorm';
import { SupportedDatabaseTypes } from '../config/database.config';

export const TimestampColumn = (name: string): PropertyDecorator => {
  return (target: any, propertyKey: string | symbol) => {
    // FIXME: In the future, refactor in order to prevent having to access env directly
    const databaseType = process.env.DATABASE_TYPE as SupportedDatabaseTypes;
    const columnType =
      databaseType === SupportedDatabaseTypes.SQLITE ? 'text' : 'timestamp';

    Column({
      name,
      type: columnType,
    })(target, propertyKey);
  };
};
