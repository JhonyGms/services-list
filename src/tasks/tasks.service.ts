import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.entity';
import { CreateTasksInput } from './dto/create-tasks.input';
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

  createTask(tasks: CreateTasksInput): Promise<Tasks> {
    const newtasks = this.tasksRepository.create(tasks);
    return this.tasksRepository.save(newtasks);
  }
}
