import { EntityIdValueObject } from '../value-object/entity-id.value-object';
interface EntityProps {
    id: EntityIdValueObject;
    createdAt: Date;
    updatedAt: Date;
}
export declare class AbstractEntity<T extends EntityProps> {
    protected props: T;
    get id(): EntityIdValueObject;
    get createdAt(): Date;
    get updatedAt(): Date;
    constructor(props: T);
    protected markAsUpdated(): void;
}
export {};
//# sourceMappingURL=abstract.entity.d.ts.map