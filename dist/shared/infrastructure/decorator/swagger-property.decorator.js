"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidParam = exports.UuidProperty = void 0;
const swagger_1 = require("@nestjs/swagger");
const defaultUuidPropertyOptions = {
    example: '053b636d-aaa3-4700-9ead-fe9cfd20507f',
};
const UuidProperty = (options = defaultUuidPropertyOptions) => (0, swagger_1.ApiProperty)(options);
exports.UuidProperty = UuidProperty;
const UuidParam = (options) => {
    return (0, swagger_1.ApiParam)({
        example: '053b636d-aaa3-4700-9ead-fe9cfd20507f',
        ...options,
    });
};
exports.UuidParam = UuidParam;
//# sourceMappingURL=swagger-property.decorator.js.map