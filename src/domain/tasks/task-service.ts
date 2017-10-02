import { Injectable } from '@angular/core';
import { Task} from './task';
import { TaskDao } from './task.dao';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

    constructor(private _dao: TaskDao) {}
    
    public saveTask(task: Task): Promise<any> {
        return this._dao.save(task)
        .then(() => true)
    }
    public getTasks() : Promise<any> {
        return this._dao.listAll()
        .then((tasks)=> tasks)
    }
}
