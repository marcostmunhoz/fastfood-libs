import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { ClassTransformOptions } from 'class-transformer';
export type TransformationOptions = ClassTransformOptions;
export type TransformationPipeOptions = {
    validatorOptions?: TransformationOptions;
};
export declare class TransformationPipe implements PipeTransform<any> {
    protected transformationOptions: TransformationOptions;
    constructor(options?: TransformationPipeOptions);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
    protected getDefaultTransformationOptions(): TransformationOptions;
    protected shouldTransformToPrimitive(metadata: ArgumentMetadata): boolean;
    protected transformPrimitive(value: any, metadata: ArgumentMetadata): any;
    protected shouldTransformDecorator(metadata: ArgumentMetadata): boolean;
    private isUndefined;
}
//# sourceMappingURL=transformation.pipe.d.ts.map