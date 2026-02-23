import { IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class EnvironmentVariables {
  @IsNumber()
  @Type(() => Number)
  PORT: number;

  @IsString()
  DB_HOST: string;

  @IsNumber()
  @Type(() => Number)
  DB_PORT: number;

  @IsString()
  DB_USERNAME: string;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_NAME: string;
}
