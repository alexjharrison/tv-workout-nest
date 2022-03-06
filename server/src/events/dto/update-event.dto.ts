import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { EventFrequency } from '../event-frequency.enum';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  @IsString()
  @IsOptional()
  title: string;

  @IsEnum(EventFrequency)
  @IsOptional()
  frequency: EventFrequency;
}
