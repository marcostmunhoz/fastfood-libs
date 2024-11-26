import { v4 } from 'uuid';
import { EntityIdGeneratorHelper, EntityIdValueObject } from '../../domain';

export class UuidV4EntityIdGeneratorHelper implements EntityIdGeneratorHelper {
  generate(): EntityIdValueObject {
    return EntityIdValueObject.create(v4());
  }
}
