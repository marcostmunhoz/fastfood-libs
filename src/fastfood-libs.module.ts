import {
  DynamicModule,
  InjectionToken,
  Module,
  Provider,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import {
  FastfoodLibsModuleAsyncOptions,
  FastfoodLibsModuleOptions,
  FastfoodLibsModuleOptionsToken,
} from './fastfood-libs-options.type';
import {
  APP_CONFIG_PROPS,
  AppConfig,
  Environment,
} from './infrastructure/config/app.config';
import {
  DATABASE_CONFIG_PROPS,
  DatabaseConfig,
  SupportedDatabaseTypes,
} from './infrastructure/config/database.config';
import { JwtHelper } from './infrastructure/helper/jwt.helper';
import { UuidV4EntityIdGeneratorHelper } from './infrastructure/helper/uuid-v4-entity-id-generator.helper';
import { HttpClientService } from './infrastructure/services/http-client.service';
import {
  EntityIdGeneratorHelperToken,
  TypeOrmModuleOptionsToken,
} from './tokens';

const moduleImports: (DynamicModule | Promise<DynamicModule>)[] = [
  ConfigModule.forRoot({
    isGlobal: true,
    load: [APP_CONFIG_PROPS, DATABASE_CONFIG_PROPS],
  }),
  JwtModule.registerAsync({
    global: true,
    useFactory: async (appConfig: AppConfig) => ({
      secret: appConfig.JWT_SECRET,
    }),
    inject: [APP_CONFIG_PROPS.KEY],
  }),
];
const moduleProviders: Provider[] = [
  JwtHelper,
  HttpClientService,
  {
    provide: EntityIdGeneratorHelperToken,
    useClass: UuidV4EntityIdGeneratorHelper,
  },
  {
    provide: TypeOrmModuleOptionsToken,
    useFactory: (
      appConfig: AppConfig,
      databaseConfig: DatabaseConfig,
      moduleOptions: FastfoodLibsModuleOptions,
    ): TypeOrmModuleOptions => {
      const synchronize =
        databaseConfig.DATABASE_SYNCHRONIZE === 'true'
          ? true
          : appConfig.NODE_ENV === Environment.Test;

      if (SupportedDatabaseTypes.SQLITE === databaseConfig.DATABASE_TYPE) {
        return {
          type: databaseConfig.DATABASE_TYPE,
          database: ':memory:',
          synchronize,
          logging: databaseConfig.DATABASE_LOGGING === 'true',
          migrations: moduleOptions.database.migrations,
          migrationsTransactionMode:
            moduleOptions.database.migrationsTransactionMode || 'none',
          migrationsRun: moduleOptions.database.runMigrationsOnStartup,
        } as SqliteConnectionOptions;
      }

      if (SupportedDatabaseTypes.MONGODB === databaseConfig.DATABASE_TYPE) {
        const database =
          appConfig.NODE_ENV === Environment.Test
            ? databaseConfig.DATABASE_TESTING_NAME
            : databaseConfig.DATABASE_NAME;

        return {
          type: databaseConfig.DATABASE_TYPE,
          url: `mongodb://${databaseConfig.DATABASE_USERNAME}:${databaseConfig.DATABASE_PASSWORD}@${databaseConfig.DATABASE_HOST}:${databaseConfig.DATABASE_PORT}/${database}`,
          logging: databaseConfig.DATABASE_LOGGING === 'true',
        } as MongoConnectionOptions;
      }

      return {
        type: databaseConfig.DATABASE_TYPE,
        host: databaseConfig.DATABASE_HOST,
        port: databaseConfig.DATABASE_PORT,
        username: databaseConfig.DATABASE_USERNAME,
        password: databaseConfig.DATABASE_PASSWORD,
        database:
          appConfig.NODE_ENV === Environment.Test
            ? databaseConfig.DATABASE_TESTING_NAME
            : databaseConfig.DATABASE_NAME,
        synchronize,
        logging: databaseConfig.DATABASE_LOGGING === 'true',
        migrations: moduleOptions.database.migrations,
        migrationsTransactionMode:
          moduleOptions.database.migrationsTransactionMode || 'none',
        migrationsRun: moduleOptions.database.runMigrationsOnStartup || false,
      } as MysqlConnectionOptions;
    },
    inject: [
      APP_CONFIG_PROPS.KEY,
      DATABASE_CONFIG_PROPS.KEY,
      FastfoodLibsModuleOptionsToken,
    ],
  },
];
const moduleExports: InjectionToken[] = [
  JwtHelper,
  HttpClientService,
  EntityIdGeneratorHelperToken,
  TypeOrmModuleOptionsToken,
  FastfoodLibsModuleOptionsToken,
];

@Module({})
export class FastfoodLibsModule {
  static forRootAsync(options: FastfoodLibsModuleAsyncOptions): DynamicModule {
    const asyncProviders = this.createAsyncOptionsProvider(options);

    return {
      global: true,
      module: FastfoodLibsModule,
      imports: [...moduleImports, ...(options.imports || [])],
      providers: [...moduleProviders, ...asyncProviders],
      exports: moduleExports,
    };
  }

  private static createAsyncOptionsProvider(
    options: FastfoodLibsModuleAsyncOptions,
  ): Provider[] {
    return [
      {
        provide: FastfoodLibsModuleOptionsToken,
        useFactory: options.useFactory,
        inject: options.inject || [],
      },
    ];
  }
}
