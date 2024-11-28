import { IsNumber, IsString } from 'class-validator';
import 'reflect-metadata';
import { validateConfig } from './config.validator';

class TestConfig {
  @IsString()
  public name: string;

  @IsNumber()
  public port: number;
}

describe('validateConfig', () => {
  test('should validate and return the config object when valid', () => {
    // Arrange
    const properties = {
      name: 'TestApp',
      port: 3000,
    };

    // Act
    const result = validateConfig(TestConfig, properties);

    // Assert
    expect(result).toEqual(properties);
  });

  test('should throw an error when config is invalid', () => {
    // Arrange
    const properties = {
      name: 'TestApp',
      port: 'invalid-port',
    };

    // Act & Assert
    expect(() => validateConfig(TestConfig, properties)).toThrowError();
  });

  test('should throw an error when required properties are missing', () => {
    // Arrange
    const properties = {
      name: 'TestApp',
    };

    // Act & Assert
    expect(() => validateConfig(TestConfig, properties)).toThrowError();
  });
});
