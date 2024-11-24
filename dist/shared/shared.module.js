"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./infrastructure/guard/auth.guard");
const jwt_helper_1 = require("./infrastructure/helper/jwt.helper");
const uuid_v4_entity_id_generator_helper_1 = require("./infrastructure/helper/uuid-v4-entity-id-generator.helper");
const tokens_1 = require("./tokens");
const helpers = [
    jwt_helper_1.JwtHelper,
    {
        provide: tokens_1.EntityIdGeneratorHelperToken,
        useClass: uuid_v4_entity_id_generator_helper_1.UuidV4EntityIdGeneratorHelper,
    },
];
const guards = [auth_guard_1.AuthGuard];
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Module)({
        providers: [...helpers, ...guards],
        exports: [tokens_1.EntityIdGeneratorHelperToken, jwt_helper_1.JwtHelper, auth_guard_1.AuthGuard],
    })
], SharedModule);
//# sourceMappingURL=shared.module.js.map