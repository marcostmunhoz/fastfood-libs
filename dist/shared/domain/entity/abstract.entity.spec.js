"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const abstract_entity_1 = require("./abstract.entity");
class TestEntity extends abstract_entity_1.AbstractEntity {
}
describe('AbstractEntity', () => {
    describe('constructor', () => {
        it('should create an instance of the entity', () => {
            // Arrange
            const props = {
                id: 'entity-id',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            // Act
            const entity = new TestEntity(props);
            // Assert
            expect(entity).toBeInstanceOf(TestEntity);
            expect(entity.id).toEqual(props.id);
            expect(entity.createdAt).toEqual(props.createdAt);
            expect(entity.updatedAt).toEqual(props.updatedAt);
        });
    });
    describe('markAsUpdated', () => {
        it('should update the updatedAt property', () => {
            // Arrange
            const props = {
                id: 'entity-id',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            const entity = new TestEntity(props);
            const newDate = new Date();
            newDate.setMinutes(newDate.getMinutes() + 1);
            const spy = jest.spyOn(global, 'Date').mockImplementation(() => newDate);
            // Act
            entity.markAsUpdated();
            // Assert
            expect(spy).toHaveBeenCalled();
            expect(entity.updatedAt).toEqual(newDate);
        });
    });
});
//# sourceMappingURL=abstract.entity.spec.js.map