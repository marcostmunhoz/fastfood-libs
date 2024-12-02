import { registerAs } from '@nestjs/config';
import {
  IsBooleanString,
  IsEnum,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { validateConfig } from './config.validator';

export enum SupportedDatabaseTypes {
  MYSQL = 'mysql',
  SQLITE = 'sqlite',
  MONGODB = 'mongodb',
}

export class DatabaseConfig {
  @IsEnum(SupportedDatabaseTypes)
  DATABASE_TYPE: string;

  @IsBooleanString()
  DATABASE_LOGGING: string;

  @IsBooleanString()
  DATABASE_SYNCHRONIZE: string;

  @IsString()
  DATABASE_HOST: string;

  @IsNumber()
  @IsPositive()
  DATABASE_PORT: number;

  @IsString()
  DATABASE_USERNAME: string;

  @IsString()
  DATABASE_PASSWORD: string;

  @IsString()
  DATABASE_NAME: string;

  @IsString()
  DATABASE_TESTING_NAME: string;
}

export const DATABASE_CONFIG_PROPS = registerAs('database', () => {
  const props = {
    DATABASE_TYPE: process.env.DATABASE_TYPE || SupportedDatabaseTypes.MYSQL,
    DATABASE_LOGGING: process.env.DATABASE_LOGGING || 'false',
    DATABASE_SYNCHRONIZE: process.env.DATABASE_SYNCHRONIZE || 'false',
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PORT: parseInt(process.env.DATABASE_PORT || '3306', 10),
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_TESTING_NAME: process.env.DATABASE_TESTING_NAME || 'test',
  };

  return validateConfig(DatabaseConfig, props);
});
