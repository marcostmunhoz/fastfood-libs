"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObjectToResponse = mapObjectToResponse;
const class_transformer_1 = require("class-transformer");
function mapObjectToResponse(outputClass, plain, options) {
    const defaultOptions = {
        excludeExtraneousValues: true,
        exposeUnsetFields: true,
    };
    return (0, class_transformer_1.plainToInstance)(outputClass, plain, Object.assign(defaultOptions, options));
}
//# sourceMappingURL=response.helper.js.map