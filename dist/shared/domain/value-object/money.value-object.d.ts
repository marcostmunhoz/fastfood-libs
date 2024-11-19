import { AbstractValueObject } from './abstract.value-object';
type MoneyValueObjectProps = {
    value: number;
};
export declare class MoneyValueObject extends AbstractValueObject<MoneyValueObjectProps> {
    get value(): number;
    get valueAsFloat(): number;
    sum(value: MoneyValueObject): MoneyValueObject;
    multiply(value: number): MoneyValueObject;
    /**
     * @param {number} value an integer representation (in cents) of the money value
     */
    static create(value: number): MoneyValueObject;
    static createFromFloat(value: number): MoneyValueObject;
    static zero(): MoneyValueObject;
    private static isValid;
}
export {};
//# sourceMappingURL=money.value-object.d.ts.map