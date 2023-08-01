import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks) private tasksRepository: Repository<Tasks>,
  ) {}

  findAll(): Promise<Tasks[]> {
    return this.tasksRepository.find();
  }
}
