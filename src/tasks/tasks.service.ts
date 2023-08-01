import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.entity';

@Injectable()
export class TasksService {
  findAll(): Tasks[] {
    return [
      {
        id: 0,
        title: 'definicion',
        content: 'this is example text',
      },
    ];
  }
}
