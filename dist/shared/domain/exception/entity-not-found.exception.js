"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityNotFoundException = void 0;
const domain_exception_1 = require("./domain.exception");
class EntityNotFoundException extends domain_exception_1.DomainException {
    constructor(message) {
        super(message);
    }
}
exports.EntityNotFoundException = EntityNotFoundException;
//# sourceMappingURL=entity-not-found.exception.js.map