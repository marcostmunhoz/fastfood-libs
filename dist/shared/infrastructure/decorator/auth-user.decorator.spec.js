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
const constants_1 = require("@nestjs/common/constants");
require("reflect-metadata");
const auth_user_decorator_1 = require("./auth-user.decorator");
const getParamDecoratorFactory = (decorator) => {
    class Test {
        test(param) {
            return param;
        }
    }
    __decorate([
        __param(0, decorator()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], Test.prototype, "test", null);
    const args = Reflect.getMetadata(constants_1.ROUTE_ARGS_METADATA, Test, 'test');
    return args[Object.keys(args)[0]].factory;
};
describe('AuthUser', () => {
    test('should set the param as the current authenticated user', () => {
        // Arrange
        const user = {
            id: 'some-id',
            name: 'Some Name',
        };
        const ctx = {
            switchToHttp: () => ({ getRequest: () => ({ user }) }),
        };
        // Act
        const factory = getParamDecoratorFactory(auth_user_decorator_1.AuthUser);
        const result = factory(null, ctx);
        // Assert
        expect(result).toBe(user);
    });
});
//# sourceMappingURL=auth-user.decorator.spec.js.map