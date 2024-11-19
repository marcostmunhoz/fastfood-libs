"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityAlreadyExistsException = void 0;
const domain_exception_1 = require("./domain.exception");
class EntityAlreadyExistsException extends domain_exception_1.DomainException {
    constructor(message) {
        super(message);
    }
}
exports.EntityAlreadyExistsException = EntityAlreadyExistsException;
//# sourceMappingURL=entity-already-exists.exception.js.map