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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const http_error_by_code_util_1 = require("@nestjs/common/utils/http-error-by-code.util");
const class_validator_1 = require("class-validator");
const iterare_1 = require("iterare");
let ValidationPipe = class ValidationPipe {
    constructor(options) {
        options = options || {};
        this.validatorOptions =
            options.validatorOptions || this.getDefaultValidatorOptions();
        this.errorHttpStatusCode =
            options.httpErrorStatusCode || this.getDefaultHttpErrorStatusCode();
    }
    async transform(value, metadata) {
        if (!this.shouldValidate(metadata)) {
            return value;
        }
        const { metatype } = metadata;
        const valueMappedToMetatype = {
            ...value,
            constructor: metatype,
        };
        const errors = await (0, class_validator_1.validate)(valueMappedToMetatype, this.validatorOptions);
        if (errors.length > 0) {
            this.throwValidationException(errors);
        }
        return value;
    }
    getDefaultValidatorOptions() {
        return {
            enableDebugMessages: false,
            skipUndefinedProperties: false,
            skipNullProperties: false,
            skipMissingProperties: false,
            whitelist: false,
            stopAtFirstError: false,
            forbidUnknownValues: true,
            forbidNonWhitelisted: false,
        };
    }
    getDefaultHttpErrorStatusCode() {
        return 422;
    }
    shouldValidateDecorator(metadata) {
        return 'custom' !== metadata.type;
    }
    shouldValidate(metadata) {
        const { metatype, data, type } = metadata;
        if ('custom' === type) {
            return false;
        }
        // If data was provided (e.g., @Body('id')), then the pipe should not apply validations
        // because we can not use the PropertyDecorators there
        if (data) {
            return false;
        }
        if (!metatype) {
            return false;
        }
        const types = [String, Boolean, Number, Array, Object, Buffer, Date];
        return !types.some((type) => type === metatype);
    }
    throwValidationException(errors = []) {
        const flattened = (0, iterare_1.iterate)(errors)
            .map((error) => this.mapChildrenToValidationErrors(error))
            .flatten()
            .filter((item) => !!item.constraints)
            // @ts-expect-error prevent errors from mismatch overload
            .map((item) => Object.values(item.constraints))
            .flatten()
            .toArray();
        throw new http_error_by_code_util_1.HttpErrorByCode[this.errorHttpStatusCode](flattened);
    }
    mapChildrenToValidationErrors(error, parent) {
        if (!(error.children && error.children.length)) {
            return [error];
        }
        const validationErrors = [];
        parent = parent ? `${parent}.${error.property}` : error.property;
        for (const item of error.children) {
            if (item.children && item.children.length) {
                validationErrors.push(...this.mapChildrenToValidationErrors(item, parent));
            }
            validationErrors.push(this.prependConstraintsWithParentProp(parent, item));
        }
        return validationErrors;
    }
    prependConstraintsWithParentProp(parent, error) {
        const constraints = {};
        for (const key in error.constraints) {
            constraints[key] = `${parent}.${error.constraints[key]}`;
        }
        return {
            ...error,
            constraints,
        };
    }
};
exports.ValidationPipe = ValidationPipe;
exports.ValidationPipe = ValidationPipe = __decorate([
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [Object])
], ValidationPipe);
//# sourceMappingURL=validation.pipe.js.map