"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedResourceException = void 0;
const domain_exception_1 = require("./domain.exception");
class UnauthorizedResourceException extends domain_exception_1.DomainException {
    constructor() {
        super('Unauthorized resource.');
    }
}
exports.UnauthorizedResourceException = UnauthorizedResourceException;
//# sourceMappingURL=unauthorized-resource.exception.js.map