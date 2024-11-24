"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidV4EntityIdGeneratorHelper = void 0;
const entity_id_value_object_1 = require("src/shared/domain/value-object/entity-id.value-object");
const uuid_1 = require("uuid");
class UuidV4EntityIdGeneratorHelper {
    generate() {
        return entity_id_value_object_1.EntityIdValueObject.create((0, uuid_1.v4)());
    }
}
exports.UuidV4EntityIdGeneratorHelper = UuidV4EntityIdGeneratorHelper;
//# sourceMappingURL=uuid-v4-entity-id-generator.helper.js.map