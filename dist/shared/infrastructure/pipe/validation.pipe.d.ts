import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ValidatorOptions as ClassValidatorOptions, ValidationError } from 'class-validator';
export type ValidatorOptions = ClassValidatorOptions;
export type ValidationPipeOptions = {
    validatorOptions?: ValidatorOptions;
    /**
     * @default 422
     */
    httpErrorStatusCode?: number;
};
export declare class ValidationPipe implements PipeTransform<any> {
    protected validatorOptions: ValidatorOptions;
    protected errorHttpStatusCode: number;
    constructor(options?: ValidationPipeOptions);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
    protected getDefaultValidatorOptions(): ValidatorOptions;
    protected getDefaultHttpErrorStatusCode(): number;
    protected shouldValidateDecorator(metadata: ArgumentMetadata): boolean;
    protected shouldValidate(metadata: ArgumentMetadata): boolean;
    protected throwValidationException(errors?: ValidationError[]): never;
    protected mapChildrenToValidationErrors(error: ValidationError, parent?: string): ValidationError[];
    protected prependConstraintsWithParentProp(parent: string, error: ValidationError): ValidationError;
}
//# sourceMappingURL=validation.pipe.d.ts.map