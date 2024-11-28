import { registerAs } from '@nestjs/config';
import {
  IsBooleanString,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { validateConfig } from './config.validator';

export class DatabaseConfig {
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

  @IsBooleanString()
  MYSQL_DATABASE_LOGGING: string;
}

export const DATABASE_CONFIG_PROPS = registerAs('database', () => {
  const props = {
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
    MYSQL_DATABASE_LOGGING: process.env.MYSQL_DATABASE_LOGGING || 'false',
  };

  return validateConfig(DatabaseConfig, props);
});
