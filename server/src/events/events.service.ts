import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventsRepository)
    private eventsRepository: EventsRepository,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = this.eventsRepository.create(createEventDto);
    await this.eventsRepository.save(event);
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
    let event = await this.findOne(id);
    event = { ...event, ...updateEventDto };
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
