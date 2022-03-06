import type { CreateEventDto } from "backend/events/dto/create-event.dto";
import type { UpdateEventDto } from "backend/events/dto/update-event.dto";
import { useApi } from "./useApi";

export const useEvents = () => {
  const { crudHandler } = useApi();

  const addEvent = (event: CreateEventDto) =>
    crudHandler("event", "POST", event);

  const updateEvent = (id: string, event: UpdateEventDto) =>
    crudHandler(`event/${id}`, "PATCH", event);

  const deleteEvent = (id: string) => crudHandler(`event/${id}`, "DELETE");

  return { addEvent, updateEvent, deleteEvent };
};
