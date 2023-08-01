import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { Tasks } from './tasks.entity';
import { CreateTasksInput } from './dto/create-tasks.input';

@Resolver()
export class TasksResolver {
  constructor(private tasksServices: TasksService) {}

  @Query((returns) => [Tasks])
  async tasks() {
    return await this.tasksServices.findAll();
  }

  @Mutation((returns) => Tasks)
  createtasks(@Args('tastInputs') taskInput: CreateTasksInput) {
    return this.tasksServices.createTask(taskInput);
  }
}
