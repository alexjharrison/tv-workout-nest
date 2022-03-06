import { IsEnum, IsString } from 'class-validator';
import { EventFrequency } from '../event-frequency.enum';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsEnum(EventFrequency)
  frequency: EventFrequency;
}
