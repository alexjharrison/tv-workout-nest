import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ExerciseDifficulty } from '../exercise-difficulty.enum';
import { CreateExerciseDto } from './create-exercise.dto';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  @IsString()
  // @IsOptional()
  title: string;

  @IsEnum(ExerciseDifficulty)
  // @IsOptional()
  difficulty: ExerciseDifficulty;
}
