import { TodoModel } from '../models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  todos: RootState.TodoState;
  router: RouterState;
}

export namespace RootState {
  export type TodoState = TodoModel[];
}
