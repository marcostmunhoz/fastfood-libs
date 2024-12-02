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
}

export class DatabaseConfig {
  @IsEnum(SupportedDatabaseTypes)
  DATABASE_TYPE: string;

  @IsBooleanString()
  DATABASE_LOGGING: string;

  @IsBooleanString()
  DATABASE_SYNCHRONIZE: string;

  @IsString()
  MYSQL_DATABASE_HOST: string;

  @IsNumber()
  @IsPositive()
  MYSQL_DATABASE_PORT: number;

  @IsString()
  MYSQL_DATABASE_USERNAME: string;

  @IsString()
  MYSQL_DATABASE_PASSWORD: string;

  @IsString()
  MYSQL_DATABASE_NAME: string;

  @IsString()
  MYSQL_DATABASE_TESTING_NAME: string;
}

export const DATABASE_CONFIG_PROPS = registerAs('database', () => {
  const props = {
    DATABASE_TYPE: process.env.DATABASE_TYPE || SupportedDatabaseTypes.MYSQL,
    DATABASE_LOGGING: process.env.DATABASE_LOGGING || 'false',
    DATABASE_SYNCHRONIZE: process.env.DATABASE_SYNCHRONIZE || 'false',
    MYSQL_DATABASE_HOST: process.env.MYSQL_DATABASE_HOST,
    MYSQL_DATABASE_PORT: parseInt(
      process.env.MYSQL_DATABASE_PORT || '3306',
      10,
    ),
    MYSQL_DATABASE_USERNAME: process.env.MYSQL_DATABASE_USERNAME,
    MYSQL_DATABASE_PASSWORD: process.env.MYSQL_DATABASE_PASSWORD,
    MYSQL_DATABASE_NAME: process.env.MYSQL_DATABASE_NAME,
    MYSQL_DATABASE_TESTING_NAME:
      process.env.MYSQL_DATABASE_TESTING_NAME || 'test',
  };

  return validateConfig(DatabaseConfig, props);
});
