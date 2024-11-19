import { SomeClass } from './some.class';

describe('SomeClass', () => {
  it('should do something', () => {
    // Arrange
    const someClass = new SomeClass();

    // Act
    const result = someClass.doSomething();

    // Assert
    expect(result).toBe(true);
  });
});
