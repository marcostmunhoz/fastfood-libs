import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtHelper } from '../helper/jwt.helper';
export declare class AuthGuard implements CanActivate {
    private readonly jwtHelper;
    constructor(jwtHelper: JwtHelper);
    canActivate(context: ExecutionContext): boolean;
}
//# sourceMappingURL=auth.guard.d.ts.map