import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsRepository } from './events.repository';
import { ShowsRepository } from 'src/shows/shows.respository';
import { ShowsService } from 'src/shows/shows.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventsRepository, ShowsRepository])],
  controllers: [EventsController],
  providers: [EventsService, ShowsService],
})
export class EventsModule {}
