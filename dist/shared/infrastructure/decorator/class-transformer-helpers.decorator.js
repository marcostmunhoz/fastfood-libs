"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformStringToEntityId = exports.TransformValueObjectToPrimitive = exports.TransformPrimitiveToValueObject = exports.TransformObjectKeyOptional = exports.TransformOptional = void 0;
const class_transformer_1 = require("class-transformer");
const entity_id_value_object_1 = require("src/shared/domain/value-object/entity-id.value-object");
const TransformOptional = (callback) => (0, class_transformer_1.Transform)(({ value }) => {
    if (value === null || value === undefined || value === '') {
        return null;
    }
    return callback(value);
});
exports.TransformOptional = TransformOptional;
const TransformObjectKeyOptional = (callback) => (0, class_transformer_1.Transform)(({ obj, key }) => {
    const value = obj[key];
    if (value === null || value === undefined || value === '') {
        return null;
    }
    return callback(value);
});
exports.TransformObjectKeyOptional = TransformObjectKeyOptional;
const TransformPrimitiveToValueObject = (cls) => (0, exports.TransformOptional)((value) => cls.create(value));
exports.TransformPrimitiveToValueObject = TransformPrimitiveToValueObject;
const TransformValueObjectToPrimitive = () => (0, exports.TransformObjectKeyOptional)((obj) => obj.value);
exports.TransformValueObjectToPrimitive = TransformValueObjectToPrimitive;
const TransformStringToEntityId = () => (0, exports.TransformPrimitiveToValueObject)(entity_id_value_object_1.EntityIdValueObject);
exports.TransformStringToEntityId = TransformStringToEntityId;
//# sourceMappingURL=class-transformer-helpers.decorator.js.map