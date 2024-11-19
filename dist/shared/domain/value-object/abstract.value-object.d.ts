import { InvalidValueException } from '../exception/invalid-value.exception';
interface ValueObjectProps {
    [index: string]: any;
}
export declare abstract class AbstractValueObject<T extends ValueObjectProps> {
    readonly props: T;
    protected constructor(props: T);
    equals(vo?: AbstractValueObject<T>): boolean;
    protected static throwInvalidValue(message: string): InvalidValueException;
}
export {};
//# sourceMappingURL=abstract.value-object.d.ts.map