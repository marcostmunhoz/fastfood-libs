import { DomainException } from '@/shared/domain/exception/domain.exception';
import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
type ResponseBody = {
    statusCode: number;
    message: string;
};
export declare class DomainExceptionFilter implements ExceptionFilter {
    catch(exception: DomainException, host: ArgumentsHost): void;
    mapExceptionToResponse(exception: DomainException): ResponseBody;
}
export {};
//# sourceMappingURL=domain-exception.filter.d.ts.map