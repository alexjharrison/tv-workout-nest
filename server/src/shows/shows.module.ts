import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsController } from './shows.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowsRepository } from './shows.respository';

@Module({
  imports: [TypeOrmModule.forFeature([ShowsRepository])],
  controllers: [ShowsController],
  providers: [ShowsService],
})
export class ShowsModule {}
