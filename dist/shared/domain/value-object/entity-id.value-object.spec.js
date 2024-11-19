"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entity_id_value_object_1 = require("./entity-id.value-object");
describe('EntityIdValueObject', () => {
    describe('create', () => {
        it('should create an EntityIdValueObject from a valid id', () => {
            // Arrange
            const id = '123';
            // Act
            const instance = entity_id_value_object_1.EntityIdValueObject.create(id);
            // Assert
            expect(instance.value).toBe(id);
        });
        it('should throw an error when the id is empty', () => {
            // Arrange
            const emptyId = '';
            // Act
            const create = () => entity_id_value_object_1.EntityIdValueObject.create(emptyId);
            // Act & Assert
            expect(create).toThrow('Invalid ID.');
        });
    });
});
//# sourceMappingURL=entity-id.value-object.spec.js.map