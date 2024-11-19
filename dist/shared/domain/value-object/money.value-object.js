"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyValueObject = void 0;
const abstract_value_object_1 = require("./abstract.value-object");
class MoneyValueObject extends abstract_value_object_1.AbstractValueObject {
    get value() {
        return this.props.value;
    }
    get valueAsFloat() {
        return parseFloat((this.value / 100).toFixed(2));
    }
    sum(value) {
        return MoneyValueObject.create(this.value + value.value);
    }
    multiply(value) {
        return MoneyValueObject.create(Math.round(this.valueAsFloat * value * 100));
    }
    /**
     * @param {number} value an integer representation (in cents) of the money value
     */
    static create(value) {
        if (!this.isValid(value)) {
            this.throwInvalidValue('Invalid money value.');
        }
        return new MoneyValueObject({ value });
    }
    static createFromFloat(value) {
        return this.create(Math.round(value * 100));
    }
    static zero() {
        return this.create(0);
    }
    static isValid(value) {
        if (value % 1 !== 0) {
            return false;
        }
        if (value === null || value === undefined || isNaN(value)) {
            return false;
        }
        if (value < 0) {
            return false;
        }
        return true;
    }
}
exports.MoneyValueObject = MoneyValueObject;
//# sourceMappingURL=money.value-object.js.map