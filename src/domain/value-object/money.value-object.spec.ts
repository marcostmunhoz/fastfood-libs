import { MoneyValueObject } from './money.value-object';

describe('MoneyValueObject', () => {
  describe('valueAsFloat', () => {
    it('should return the value as a float', () => {
      // Arrange
      const value = 12345;

      // Act
      const instance = MoneyValueObject.create(value);

      // Assert
      expect(instance.valueAsFloat).toBe(123.45);
    });
  });

  describe('sum', () => {
    it('should sum two MoneyValueObjects', () => {
      // Arrange
      const value1 = 100;
      const value2 = 200;

      // Act
      const instance1 = MoneyValueObject.create(value1);
      const instance2 = MoneyValueObject.create(value2);
      const result = instance1.sum(instance2);

      // Assert
      expect(result.value).toBe(300);
    });
  });

  describe('multiply', () => {
    it('should multiply a MoneyValueObject by a number', () => {
      // Arrange
      const value = 100;
      const multiplier = 2;

      // Act
      const instance = MoneyValueObject.create(value);
      const result = instance.multiply(multiplier);

      // Assert
      expect(result.value).toBe(200);
    });
  });

  describe('create', () => {
    it('should create a MoneyValueObject from a valid value', () => {
      // Arrange
      const value = 100;

      // Act
      const instance = MoneyValueObject.create(value);

      // Assert
      expect(instance.value).toBe(value);
    });

    it('should throw an error when the value is negative', () => {
      // Arrange
      const negativeValue = -100;

      // Act
      const create = () => MoneyValueObject.create(negativeValue);

      // Act & Assert
      expect(create).toThrow('Invalid money value.');
    });

    it('should throw an error when the value is NaN', () => {
      // Arrange
      const nanValue = NaN;

      // Act
      const create = () => MoneyValueObject.create(nanValue);

      // Act & Assert
      expect(create).toThrow('Invalid money value.');
    });

    it('should throw an error when the value is a float', () => {
      // Arrange
      const float = 100.1;

      // Act
      const create = () => MoneyValueObject.create(float);

      // Act & Assert
      expect(create).toThrow('Invalid money value.');
    });
  });

  describe('createFromFloat', () => {
    it('should create a MoneyValueObject from a valid float value', () => {
      // Arrange
      const value = 1.0;

      // Act
      const instance = MoneyValueObject.createFromFloat(value);

      // Assert
      expect(instance.value).toBe(100);
    });

    it('should throw an error when the value is negative', () => {
      // Arrange
      const negativeValue = -1.0;

      // Act
      const create = () => MoneyValueObject.createFromFloat(negativeValue);

      // Act & Assert
      expect(create).toThrow('Invalid money value.');
    });

    it('should throw an error when the value is NaN', () => {
      // Arrange
      const nanValue = NaN;

      // Act
      const create = () => MoneyValueObject.createFromFloat(nanValue);

      // Act & Assert
      expect(create).toThrow('Invalid money value.');
    });
  });

  describe('zero', () => {
    it('should create a MoneyValueObject with a value of 0', () => {
      // Act
      const instance = MoneyValueObject.zero();

      // Assert
      expect(instance.value).toBe(0);
    });
  });
});
