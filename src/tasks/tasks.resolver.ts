import { Resolver, Query } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';

@Resolver()
export class TasksResolver {
  constructor(private tasksServices: TasksService) {}

  @Query((returns) => [Tasks])
  async tasks() {
    return await this.tasksServices.findAll();
  }
}
