import { Injectable } from '@nestjs/common';
import { Microfrontend, Todo } from '@myorg/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
  shellRoutes: Microfrontend[] = [
    {
      // For Loading
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      // remoteEntry: 'http://localhost:3333/mfe1/remoteEntry.js',
      remoteName: 'mfe1',
      exposedModule: './FlightsModule',

      // For Routing
      displayName: 'Flights',
      routePath: 'flights',
      ngModuleName: 'FlightsModule',
      scope: 'Shell',
    },
    {
      // For Loading
      remoteEntry: 'http://localhost:3001/remoteEntry.js',
      remoteName: 'mfe2',
      exposedModule: './Module',

      // For Routing
      displayName: 'Bookings',
      routePath: 'bookings',
      ngModuleName: 'BookingsModule',
      scope: 'Shell',
    },
    {
      // For Loading
      remoteEntry: 'http://localhost:3002/remoteEntry.js',
      remoteName: 'todo',
      exposedModule: './Module',

      // For Routing
      displayName: 'Todos',
      routePath: 'todos',
      ngModuleName: 'TodoModule',
      scope: 'Flights',
    },
  ];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }

  getShellRoutes() {
    return this.shellRoutes;
  }
}
