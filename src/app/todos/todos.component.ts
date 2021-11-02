import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {ToDo} from "../shared/todo.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: ToDo[]
  todoSubscription!: Subscription
  todo!: ToDo
  id!: number

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todoSubscription = this.dataService.todosS$.subscribe(()=>{
      this.todos = this.dataService.todosS;
    });
  }

}
