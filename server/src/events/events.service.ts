import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShowsService } from 'src/shows/shows.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventsRepository)
    private eventsRepository: EventsRepository,

    private readonly showsService: ShowsService,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = this.eventsRepository.create(createEventDto);

    const show = await this.showsService.findOne(createEventDto.showId);

    event.show = show;
    return event;
  }

  findAll() {
    return this.eventsRepository.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: string) {
    const event = await this.eventsRepository.findOne(id);
    if (!event) {
      throw new NotFoundException();
    }
    return event;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const event = await this.findOne(id);

    const { frequency, title, showId } = updateEventDto;
    const show = await this.showsService.findOne(showId);

    event.frequency ||= frequency;
    event.title ||= title;
    event.show ||= show;

    await this.eventsRepository.save(event);

    return event;
  }

  async remove(id: string) {
    const res = await this.eventsRepository.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException();
    }
  }
}
