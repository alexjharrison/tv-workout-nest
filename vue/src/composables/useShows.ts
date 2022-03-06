import type { CreateShowDto } from "backend/shows/dto/create-show.dto";
import type { UpdateShowDto } from "backend/shows/dto/update-show.dto";
import { useApi } from "./useApi";

export const useShows = () => {
  const { crudHandler } = useApi();

  const addShow = (show: CreateShowDto) => crudHandler("show", "POST", show);

  const updateShow = (id: string, show: UpdateShowDto) =>
    crudHandler(`show/${id}`, "PATCH", show);

  const deleteShow = (id: string) => crudHandler(`show/${id}`, "DELETE");

  return { addShow, updateShow, deleteShow };
};
