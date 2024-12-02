import { PrimaryColumn } from 'typeorm';
import { TimestampColumn } from '../decorator/typeorm.decorator';

export abstract class BaseEntity {
  @PrimaryColumn()
  id: string;

  @TimestampColumn('created_at')
  createdAt: Date;

  @TimestampColumn('updated_at')
  updatedAt: Date;
}
