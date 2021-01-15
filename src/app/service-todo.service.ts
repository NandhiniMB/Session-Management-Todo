import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { TodoModel } from './todomodel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceTodoService {

  constructor(private http : HttpClient) { }

  todoUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit = "?_limit=20";
  getTodoList():Observable<TodoModel[]>
  {
       return this.http.get<TodoModel[]>(`${this.todoUrl}${this.todosLimit}`)
  }

  getTodo(id:number)
  {
    const getUrl= `${this.todoUrl}/${id}`
    console.log(getUrl);
    return this.http.get(getUrl);
  }
}
