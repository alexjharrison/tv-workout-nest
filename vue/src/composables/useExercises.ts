import type { CreateExerciseDto } from "backend/exercises/dto/create-exercise.dto";
import type { UpdateExerciseDto } from "backend/exercises/dto/update-exercise.dto";
import { useApi } from "./useApi";

export const useExercises = () => {
  const { crudHandler } = useApi();

  const addExercise = (exercise: CreateExerciseDto) =>
    crudHandler("exercise", "POST", exercise);

  const updateExercise = (id: string, exercise: UpdateExerciseDto) =>
    crudHandler(`exercise/${id}`, "PATCH", exercise);

  const deleteExercise = (id: string) =>
    crudHandler(`exercise/${id}`, "DELETE");

  return { addExercise, updateExercise, deleteExercise };
};
