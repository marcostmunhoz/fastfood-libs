"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const money_value_object_1 = require("./money.value-object");
describe('MoneyValueObject', () => {
    describe('create', () => {
        it('should create a MoneyValueObject from a valid value', () => {
            // Arrange
            const value = 100;
            // Act
            const instance = money_value_object_1.MoneyValueObject.create(value);
            // Assert
            expect(instance.value).toBe(value);
        });
        it('should throw an error when the value is negative', () => {
            // Arrange
            const negativeValue = -100;
            // Act
            const create = () => money_value_object_1.MoneyValueObject.create(negativeValue);
            // Act & Assert
            expect(create).toThrow('Invalid money value.');
        });
        it('should throw an error when the value is NaN', () => {
            // Arrange
            const nanValue = NaN;
            // Act
            const create = () => money_value_object_1.MoneyValueObject.create(nanValue);
            // Act & Assert
            expect(create).toThrow('Invalid money value.');
        });
        it('should throw an error when the value is a float', () => {
            // Arrange
            const float = 100.1;
            // Act
            const create = () => money_value_object_1.MoneyValueObject.create(float);
            // Act & Assert
            expect(create).toThrow('Invalid money value.');
        });
    });
    describe('createFromFloat', () => {
        it('should create a MoneyValueObject from a valid float value', () => {
            // Arrange
            const value = 1.0;
            // Act
            const instance = money_value_object_1.MoneyValueObject.createFromFloat(value);
            // Assert
            expect(instance.value).toBe(100);
        });
        it('should throw an error when the value is negative', () => {
            // Arrange
            const negativeValue = -1.0;
            // Act
            const create = () => money_value_object_1.MoneyValueObject.createFromFloat(negativeValue);
            // Act & Assert
            expect(create).toThrow('Invalid money value.');
        });
        it('should throw an error when the value is NaN', () => {
            // Arrange
            const nanValue = NaN;
            // Act
            const create = () => money_value_object_1.MoneyValueObject.createFromFloat(nanValue);
            // Act & Assert
            expect(create).toThrow('Invalid money value.');
        });
    });
});
//# sourceMappingURL=money.value-object.spec.js.map