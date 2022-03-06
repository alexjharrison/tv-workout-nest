import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesRepository } from './exercises.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ExercisesRepository])],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
