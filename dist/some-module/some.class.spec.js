"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const some_class_1 = require("./some.class");
describe('SomeClass', () => {
    it('should do something', () => {
        // Arrange
        const someClass = new some_class_1.SomeClass();
        // Act
        const result = someClass.doSomething();
        // Assert
        expect(result).toBe(true);
    });
});
//# sourceMappingURL=some.class.spec.js.map