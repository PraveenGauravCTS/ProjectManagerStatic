import { Injectable } from '@angular/core';
import { UserModel } from '../model/user-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ProjectModel } from '../model/project-model';
import { ParentTaskModel } from '../model/parent-task-model';
import { TaskModel } from '../model/task-model';



@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  GetUsers(): Observable<any> {
    let url = this.baseUrl + 'users';
    return this.http.get<any>(url);
  }

  GetUserById(Id: number): Observable<any> {
    let url = this.baseUrl + 'users/id/' + Id;
    return this.http.get<any>(url);
  }

  AddUser(model: UserModel): Observable<object> {
    let url = this.baseUrl + 'users';
    return this.http.post(url, model);
  }

  UpdateUser(model: UserModel): Observable<object> {
    let url = this.baseUrl + 'users/edit';
    return this.http.post(url, model);
  }

  DeleteUser(Id: number): Observable<object> {
    let url = this.baseUrl + 'users/delete/id/' + Id;
    return this.http.delete(url);
  }

  GetProjects(): Observable<any> {
    let url = this.baseUrl + 'projects';
    return this.http.get<any>(url);
  }

  AddProject(model: ProjectModel): Observable<object> {
    let url = this.baseUrl + 'projects';
    return this.http.post(url, model);
  }

  UpdateProject(model: ProjectModel): Observable<object> {
    let url = this.baseUrl + 'projects/edit';
    return this.http.post(url, model);
  }

  EndProject(model: ProjectModel): Observable<object> {
    let url = this.baseUrl + 'EndProject';
    return this.http.put(url, model);
  }

  GetParentTasks(): Observable<any> {
    let url = this.baseUrl + 'parenttasks';
    return this.http.get<any>(url);
  }

  AddParentTask(model: ParentTaskModel): Observable<object> {
    let url = this.baseUrl + 'parenttasks';
    return this.http.post(url, model);
  }

  AddTask(model: TaskModel): Observable<object> {
    let url = this.baseUrl + 'tasks';
    return this.http.post(url, model);
  }

  GetTasks(): Observable<any> {
    let url = this.baseUrl + 'tasks';
    return this.http.get<any>(url);
  }

  EndTask(model: TaskModel): Observable<object> {
    let url = this.baseUrl + 'EndTask';
    return this.http.put(url, model);
  }

  GetTaskById(Id: number): Observable<any> {
    let url = this.baseUrl + 'tasks/id/' + Id;
    return this.http.get<any>(url);
  }

  UpdateTask(model: TaskModel): Observable<object> {
    let url = this.baseUrl + 'tasks/edit';
    return this.http.post(url, model);
  }
}
