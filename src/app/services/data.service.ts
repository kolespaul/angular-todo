import {Injectable} from "@angular/core";
import {ToDo} from "../shared/todo.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable()
export class DataService {
  todos: ToDo [] = [
    {id: 1, text: 'Todo 1', creationDate: new Date(), expirationDate: new Date(), completed: false},
    {id: 2, text: 'Todo 2', creationDate: new Date(), expirationDate: new Date(), completed: false},
    {id: 3, text: 'Todo 3', creationDate: new Date(), expirationDate: new Date(), completed: false},
  ]
  id =4;

  todoSubject: BehaviorSubject<ToDo[]> = new BehaviorSubject(this.todos)

  constructor() {}

  get todosS$(): Observable<ToDo[]> {
    return this.todoSubject.asObservable();
  }

  get todosS(): ToDo[] {
    return this.todoSubject.getValue();
  }

  updateTodos(todo: ToDo): void {
    this.todoSubject.next([todo, ...this.todos]);
    this.todos = [todo, ...this.todos]
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: ToDo) {
    this.updateTodos(todo);
  }

  // addTodo(todo: ToDo) {
  //   this.todos.push(todo)
  // }
  //
  // deleteTodo(deleteId: number){
  //   this.todos = this.todos.filter(({id}) => id !== deleteId)
  // }
}
