import { Show } from 'src/shows/entities/show.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EventFrequency } from '../event-frequency.enum';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  title: string;

  @Column()
  frequency: EventFrequency;

  @ManyToOne((_type) => Show, (show) => show.events)
  show: Show;
}
