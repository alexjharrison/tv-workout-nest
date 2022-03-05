import { EntityRepository, Repository } from 'typeorm';
import { Show } from './entities/show.entity';

@EntityRepository(Show)
export class ShowsRepository extends Repository<Show> {}
