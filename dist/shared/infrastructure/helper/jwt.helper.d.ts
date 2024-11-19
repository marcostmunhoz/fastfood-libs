import { JwtService } from '@nestjs/jwt';
export declare class JwtHelper {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    decode<T>(token: string): T;
}
//# sourceMappingURL=jwt.helper.d.ts.map