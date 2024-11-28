import { ProductCodeValueObject } from './product-code.value-object';

describe('ProductCodeValueObject', () => {
  describe('create', () => {
    it('should create a ProductCodeValueObject from a valid code', () => {
      // Arrange
      const name = 'CODE123';

      // Act
      const instance = ProductCodeValueObject.create(name);

      // Assert
      expect(instance.value).toBe(name);
    });

    it('should throw an error when the code is empty', () => {
      // Arrange
      const emptyCode = '';

      // Act
      const create = () => ProductCodeValueObject.create(emptyCode);

      // Act & Assert
      expect(create).toThrow('Invalid product code.');
    });

    it('should throw an error when the code is less than 2 characters', () => {
      // Arrange
      const shortCode = 'A';

      // Act
      const create = () => ProductCodeValueObject.create(shortCode);

      // Act & Assert
      expect(create).toThrow('Invalid product code.');
    });

    it('should throw an error when the code is more than 20 characters', () => {
      // Arrange
      const longCode = 'A'.repeat(21);

      // Act
      const create = () => ProductCodeValueObject.create(longCode);

      // Act & Assert
      expect(create).toThrow('Invalid product code.');
    });

    it('should throw an error when the code contains a space', () => {
      // Arrange
      const codeWithSpace = 'CODE 123';

      // Act
      const create = () => ProductCodeValueObject.create(codeWithSpace);

      // Act & Assert
      expect(create).toThrow('Invalid product code.');
    });
  });
});
