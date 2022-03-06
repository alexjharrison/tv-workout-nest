import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
import { CreateShowDto } from './create-show.dto';

export class UpdateShowDto extends PartialType(CreateShowDto) {
  @IsString()
  // @IsOptional()
  title: string;
}
