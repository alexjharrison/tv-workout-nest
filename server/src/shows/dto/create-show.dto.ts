import { IsString } from 'class-validator';

export class CreateShowDto {
  @IsString()
  title: string;
}
