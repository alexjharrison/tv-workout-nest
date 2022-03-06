import { IsEnum, IsString } from 'class-validator';
import { ExerciseDifficulty } from '../exercise-difficulty.enum';

export class CreateExerciseDto {
  @IsString()
  title: string;

  @IsEnum(ExerciseDifficulty)
  difficulty: ExerciseDifficulty;
}
