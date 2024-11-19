"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_value_object_1 = require("./abstract.value-object");
class ConcreteValueObject extends abstract_value_object_1.AbstractValueObject {
    constructor(props) {
        super(props);
    }
}
describe('AbstractValueObject', () => {
    describe('equals', () => {
        it('should return true when comparing two value objects with the same props', () => {
            // Arrange
            const props = { id: 1, name: 'John' };
            const valueObject1 = new ConcreteValueObject(props);
            const valueObject2 = new ConcreteValueObject(props);
            // Act
            const result = valueObject1.equals(valueObject2);
            // Assert
            expect(result).toBe(true);
        });
        it('should return false when comparing two value objects with different props', () => {
            // Arrange
            const props1 = { id: 1, name: 'John' };
            const props2 = { id: 2, name: 'Jane' };
            const valueObject1 = new ConcreteValueObject(props1);
            const valueObject2 = new ConcreteValueObject(props2);
            // Act
            const result = valueObject1.equals(valueObject2);
            // Assert
            expect(result).toBe(false);
        });
    });
});
//# sourceMappingURL=abstract.value-object.spec.js.map