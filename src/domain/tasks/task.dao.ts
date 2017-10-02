import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskDao {

    constructor(private _storage: Storage) {

    }
    public save(taskToSave: Task) {
        let key = this._getKey(taskToSave);
        return this._storage.set(key, taskToSave);
    }
    
    private _getKey(taskToSave: Task) {
        return taskToSave.name;
    }    
    public listAll() {
        let tasks: Task[] = [];
        return this._storage.forEach(dado => {
            let task = new Task(dado.name, dado.description, dado.done);
            tasks.push(task);
        })
        .then(() => tasks );
    }
}