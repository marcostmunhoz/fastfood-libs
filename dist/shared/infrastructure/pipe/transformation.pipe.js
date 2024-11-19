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
exports.TransformationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
let TransformationPipe = class TransformationPipe {
    constructor(options) {
        options = options || {};
        this.transformationOptions =
            options.validatorOptions || this.getDefaultTransformationOptions();
    }
    async transform(value, metadata) {
        if (this.shouldTransformToPrimitive(metadata)) {
            return this.transformPrimitive(value, metadata);
        }
        const { metatype } = metadata;
        if (!this.shouldTransformDecorator(metadata)) {
            return value;
        }
        // @ts-expect-error prevent errors from mismatch overload
        return (0, class_transformer_1.plainToClass)(metatype, value, this.transformationOptions);
    }
    getDefaultTransformationOptions() {
        return {
            enableImplicitConversion: false,
            exposeDefaultValues: true,
        };
    }
    shouldTransformToPrimitive(metadata) {
        const { type, data } = metadata;
        // If data was not provided (e.g., @Param()), then the pipe should not
        // cat to primitive implicitly, as we assume that the type is an object
        // with properties that should be transformed
        if (!data) {
            return false;
        }
        return 'query' === type || 'param' === type;
    }
    transformPrimitive(value, metadata) {
        const { metatype } = metadata;
        if (Boolean === metatype) {
            return this.isUndefined(value)
                ? undefined
                : true === value || 'true' === value;
        }
        if (Number === metatype) {
            return +value;
        }
        return value;
    }
    shouldTransformDecorator(metadata) {
        const { metatype, data, type } = metadata;
        if ('custom' === type) {
            return false;
        }
        // If data was provided (e.g., @Body('id')), then the pipe should not
        // apply transformations, because we can not use the PropertyDecorators
        // there
        if (data) {
            return false;
        }
        return !!metatype;
    }
    isUndefined(obj) {
        return typeof obj === 'undefined';
    }
};
exports.TransformationPipe = TransformationPipe;
exports.TransformationPipe = TransformationPipe = __decorate([
    __param(0, (0, common_1.Optional)()),
    __metadata("design:paramtypes", [Object])
], TransformationPipe);
//# sourceMappingURL=transformation.pipe.js.map