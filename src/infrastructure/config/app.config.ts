import { registerAs } from '@nestjs/config';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { validateConfig } from './config.validator';

export enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
}

export class AppConfig {
  @IsString()
  @IsEnum(Environment)
  @IsNotEmpty()
  NODE_ENV: string;

  @IsString()
  @IsNotEmpty()
  HOST: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  JWT_SECRET: string;
}

export const APP_CONFIG_PROPS = registerAs('app', () => {
  const props = {
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.HOST,
    PORT: parseInt(process.env.PORT || '3000', 10),
    JWT_SECRET: process.env.JWT_SECRET,
  };

  return validateConfig(AppConfig, props);
});
