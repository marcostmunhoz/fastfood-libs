type TransformOptionalCallback = (value: any) => any | null;
export declare const TransformOptional: (callback: TransformOptionalCallback) => PropertyDecorator;
export declare const TransformObjectKeyOptional: (callback: TransformOptionalCallback) => PropertyDecorator;
export declare const TransformPrimitiveToValueObject: <T>(cls: Function) => PropertyDecorator;
export declare const TransformValueObjectToPrimitive: () => PropertyDecorator;
export declare const TransformStringToEntityId: () => PropertyDecorator;
export {};
//# sourceMappingURL=class-transformer-helpers.decorator.d.ts.map