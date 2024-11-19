import { AbstractValueObject } from './abstract.value-object';
type EntityIdValueObjectProps = {
    value: string;
};
export declare class EntityIdValueObject extends AbstractValueObject<EntityIdValueObjectProps> {
    get value(): string;
    static create(id: string): EntityIdValueObject;
}
export {};
//# sourceMappingURL=entity-id.value-object.d.ts.map