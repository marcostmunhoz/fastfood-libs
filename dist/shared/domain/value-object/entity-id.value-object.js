"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityIdValueObject = void 0;
const abstract_value_object_1 = require("./abstract.value-object");
class EntityIdValueObject extends abstract_value_object_1.AbstractValueObject {
    get value() {
        return this.props.value;
    }
    static create(id) {
        if (!id) {
            this.throwInvalidValue('Invalid ID.');
        }
        const cleanId = String(id).trim();
        if (cleanId.length === 0) {
            this.throwInvalidValue('Invalid ID.');
        }
        return new EntityIdValueObject({ value: cleanId });
    }
}
exports.EntityIdValueObject = EntityIdValueObject;
//# sourceMappingURL=entity-id.value-object.js.map