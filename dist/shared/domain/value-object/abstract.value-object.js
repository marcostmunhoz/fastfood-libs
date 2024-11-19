"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractValueObject = void 0;
const shallow_equal_object_1 = require("shallow-equal-object");
const invalid_value_exception_1 = require("../exception/invalid-value.exception");
class AbstractValueObject {
    constructor(props) {
        this.props = Object.freeze(props);
    }
    equals(vo) {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.props === undefined) {
            return false;
        }
        return (0, shallow_equal_object_1.shallowEqual)(this.props, vo.props);
    }
    static throwInvalidValue(message) {
        throw new invalid_value_exception_1.InvalidValueException(message);
    }
}
exports.AbstractValueObject = AbstractValueObject;
//# sourceMappingURL=abstract.value-object.js.map