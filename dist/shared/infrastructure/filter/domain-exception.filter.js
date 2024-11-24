"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const domain_exception_1 = require("src/shared/domain/exception/domain.exception");
const entity_already_exists_exception_1 = require("src/shared/domain/exception/entity-already-exists.exception");
const entity_not_found_exception_1 = require("src/shared/domain/exception/entity-not-found.exception");
const unauthorized_resource_exception_1 = require("src/shared/domain/exception/unauthorized-resource.exception");
let DomainExceptionFilter = class DomainExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const body = this.mapExceptionToResponse(exception);
        response.status(body.statusCode).json(body);
    }
    mapExceptionToResponse(exception) {
        const response = {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: exception.message,
        };
        if (exception instanceof entity_not_found_exception_1.EntityNotFoundException) {
            response.statusCode = common_1.HttpStatus.NOT_FOUND;
        }
        if (exception instanceof entity_already_exists_exception_1.EntityAlreadyExistsException) {
            response.statusCode = common_1.HttpStatus.CONFLICT;
        }
        if (exception instanceof unauthorized_resource_exception_1.UnauthorizedResourceException) {
            response.statusCode = common_1.HttpStatus.FORBIDDEN;
        }
        return response;
    }
};
exports.DomainExceptionFilter = DomainExceptionFilter;
exports.DomainExceptionFilter = DomainExceptionFilter = __decorate([
    (0, common_1.Catch)(domain_exception_1.DomainException)
], DomainExceptionFilter);
//# sourceMappingURL=domain-exception.filter.js.map