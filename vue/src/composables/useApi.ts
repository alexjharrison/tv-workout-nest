import type { ApiError } from "@/@types/api";
import { useFetch } from "@vueuse/core";
import type { Exercise } from "backend/exercises/entities/exercise.entity";
import type { Show } from "backend/shows/entities/show.entity";
import { computed, ref } from "vue";

const {
  data: shows,
  execute: refetchShows,
  isFetching: isFetchingShows,
} = useFetch<Show[]>("/api/shows").json();

const {
  data: exercises,
  execute: refetchExercises,
  isFetching: isFetchingExercises,
} = useFetch<Exercise[]>("/api/exercises").json();

const fetchError = ref<ApiError>();

export const useApi = () => {
  const isFetching = computed(() => isFetchingShows || isFetchingExercises);

  async function crudHandler(
    path: string,
    method: "PATCH" | "POST" | "DELETE",
    body: unknown = undefined
  ) {
    try {
      await fetch(`api/${path}`, { method, body: JSON.stringify(body) });
      refetchShows();
      refetchExercises();
    } catch (error) {
      fetchError.value ||= error as unknown as ApiError;
    }
  }

  return {
    shows,
    exercises,
    fetchError,
    isFetching,
    crudHandler,
  };
};
