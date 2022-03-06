import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ExercisesRepository } from './exercises.repository';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(ExercisesRepository)
    private exercisesRepository: ExercisesRepository,
  ) {}

  async create(createExerciseDto: CreateExerciseDto) {
    const exercise = this.exercisesRepository.create(createExerciseDto);
    await this.exercisesRepository.save(exercise);

    return exercise;
  }

  async findAll() {
    return this.exercisesRepository.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: string) {
    const exercise = await this.exercisesRepository.findOne(id);
    if (!exercise) {
      throw new NotFoundException();
    }
    return exercise;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    let exercise = await this.findOne(id);
    exercise = { ...exercise, ...updateExerciseDto };
    await this.exercisesRepository.save(exercise);

    return exercise;
  }

  async remove(id: string) {
    const res = await this.exercisesRepository.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException();
    }
  }
}
