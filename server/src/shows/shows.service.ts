import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { ShowsRepository } from './shows.respository';

@Injectable()
export class ShowsService {
  constructor(
    @InjectRepository(ShowsRepository)
    private showsRepository: ShowsRepository,
  ) {}

  async create(createShowDto: CreateShowDto) {
    const show = this.showsRepository.create(createShowDto);
    await this.showsRepository.save(show);

    return show;
  }

  findAll() {
    return this.showsRepository.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: string) {
    const show = await this.showsRepository.findOne(id);
    if (!show) {
      throw new NotFoundException();
    }
    return show;
  }

  async update(id: string, updateShowDto: UpdateShowDto) {
    let show = await this.findOne(id);
    show = { ...show, ...updateShowDto };
    await this.showsRepository.save(show);

    return show;
  }

  async remove(id: string) {
    const res = await this.showsRepository.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException();
    }
  }
}
