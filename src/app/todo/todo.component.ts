import { Component, OnInit } from '@angular/core';
import {ServiceTodoService} from "../service-todo.service";
import { TodoModel } from '../todomodel';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private service: ServiceTodoService) { }

  todos : TodoModel[] = [];
  loadTodoDetail : Boolean = false;
  selectedTodo : any;
  ngOnInit(): void {
    // this.todo = this.service.getTodoList();
    this.service.getTodoList().subscribe(todos => {
      this.todos = todos;
    })
  }

 onClick(todo:TodoModel){
    this.loadTodoDetail = true;
  //  this.selectedTodo.id = todo.id;
  this.service.getTodo(todo.id).subscribe(s =>{
    this.selectedTodo = s;
  })
  console.log(this.selectedTodo);
  alert(this.selectedTodo.title);

  
 }
  
}
