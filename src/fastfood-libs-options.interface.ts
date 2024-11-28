import { InjectionToken, ModuleMetadata } from '@nestjs/common';
import { ClassConstructor } from 'class-transformer';
import { BaseEntity } from './infrastructure';

export type FastfoodLibsModuleOptions = {
  database: {
    /**
     * The entities that will be used by the ORM module.
     */
    entities: ClassConstructor<BaseEntity>[];
  };
};

export type FastfoodLibsModuleOptionsFactory = {
  createModuleOptions():
    | Promise<FastfoodLibsModuleOptions>
    | FastfoodLibsModuleOptions;
};

export type FastfoodLibsModuleAsyncOptions = Pick<ModuleMetadata, 'imports'> & {
  useFactory: (
    ...args: any[]
  ) => Promise<FastfoodLibsModuleOptions> | FastfoodLibsModuleOptions;
  inject?: InjectionToken[];
};

export const FastfoodLibsModuleOptionsToken = Symbol(
  'FastfoodLibsModuleOptionsToken',
);
