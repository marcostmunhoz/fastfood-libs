import { InjectionToken, ModuleMetadata } from '@nestjs/common';
import { MixedList } from 'typeorm';
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';

export type SupportedDatabaseTypes = 'mysql' | 'sqlite';

export type FastfoodLibsModuleOptions = {
  database: {
    /**
     * The type of the database.
     */
    type: SupportedDatabaseTypes;
    /**
     * The migration paths (accepts glob patterns).
     *
     * @default []
     */
    migrations?: MixedList<Function | string>;
    /**
     * The transaction mode for migrations.
     *
     * @default 'none'
     */
    migrationsTransactionMode?: BaseDataSourceOptions['migrationsTransactionMode'];
    /**
     * Whether to run migrations on application startup.
     *
     * @default false
     */
    runMigrationsOnStartup?: boolean;
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
