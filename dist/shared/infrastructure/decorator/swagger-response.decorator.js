"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNotFoundResponse = exports.DefaultInternalServerErrorResponse = exports.DefaultUnprocessableEntityResponse = exports.DefaultBadRequestResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class BadRequestResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bad Request',
    }),
    __metadata("design:type", String)
], BadRequestResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 400,
    }),
    __metadata("design:type", Number)
], BadRequestResponse.prototype, "statusCode", void 0);
class UnprocessableEntityResponse {
    constructor() {
        this.error = 'Unprocessable Entity';
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [String],
        example: ['name should not be empty', 'email should not be empty'],
    }),
    __metadata("design:type", Array)
], UnprocessableEntityResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Unprocessable Entity',
    }),
    __metadata("design:type", String)
], UnprocessableEntityResponse.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 422,
    }),
    __metadata("design:type", Number)
], UnprocessableEntityResponse.prototype, "statusCode", void 0);
class InternalServerErrorResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Internal Server Error',
    }),
    __metadata("design:type", String)
], InternalServerErrorResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 500,
    }),
    __metadata("design:type", Number)
], InternalServerErrorResponse.prototype, "statusCode", void 0);
class NotFoundResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Not Found',
    }),
    __metadata("design:type", String)
], NotFoundResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 404,
    }),
    __metadata("design:type", Number)
], NotFoundResponse.prototype, "statusCode", void 0);
const defaultBadRequestOptions = {
    status: 400,
    description: 'Bad Request',
    type: BadRequestResponse,
};
const defaultUnprocessableEntityOptions = {
    status: 422,
    description: 'Unprocessable Entity',
    type: UnprocessableEntityResponse,
};
const defaultInternalServerErrorOptions = {
    status: 500,
    description: 'Internal Server Error',
    type: InternalServerErrorResponse,
};
const defaultNotFoundOptions = {
    status: 404,
    description: 'Not Found',
    type: NotFoundResponse,
};
const DefaultBadRequestResponse = (options = defaultBadRequestOptions) => (0, swagger_1.ApiResponse)(options);
exports.DefaultBadRequestResponse = DefaultBadRequestResponse;
const DefaultUnprocessableEntityResponse = (options = defaultUnprocessableEntityOptions) => (0, swagger_1.ApiResponse)(options);
exports.DefaultUnprocessableEntityResponse = DefaultUnprocessableEntityResponse;
const DefaultInternalServerErrorResponse = (options = defaultInternalServerErrorOptions) => (0, swagger_1.ApiResponse)(options);
exports.DefaultInternalServerErrorResponse = DefaultInternalServerErrorResponse;
const DefaultNotFoundResponse = (options = defaultNotFoundOptions) => (0, swagger_1.ApiResponse)(options);
exports.DefaultNotFoundResponse = DefaultNotFoundResponse;
//# sourceMappingURL=swagger-response.decorator.js.map