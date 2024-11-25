import { Module } from '@nestjs/common';
import { AuthGuard } from './infrastructure/guard/auth.guard';
import { JwtHelper } from './infrastructure/helper/jwt.helper';
import { UuidV4EntityIdGeneratorHelper } from './infrastructure/helper/uuid-v4-entity-id-generator.helper';
import { EntityIdGeneratorHelperToken } from './tokens';

const helpers = [
  JwtHelper,
  {
    provide: EntityIdGeneratorHelperToken,
    useClass: UuidV4EntityIdGeneratorHelper,
  },
];
const guards = [AuthGuard];

@Module({
  providers: [...helpers, ...guards],
  exports: [EntityIdGeneratorHelperToken, JwtHelper, AuthGuard],
})
export class FastfoodLibsModule {}
