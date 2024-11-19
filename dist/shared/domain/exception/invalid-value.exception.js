"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidValueException = void 0;
const domain_exception_1 = require("./domain.exception");
class InvalidValueException extends domain_exception_1.DomainException {
    constructor(message) {
        super(message);
    }
}
exports.InvalidValueException = InvalidValueException;
//# sourceMappingURL=invalid-value.exception.js.map