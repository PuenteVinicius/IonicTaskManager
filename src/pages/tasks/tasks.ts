import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TaskService } from "../../domain/tasks/task-service";
import { Task } from "../../domain/tasks/task";

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage implements OnInit {

  public tasks: Task[] =[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _service:TaskService) {
  }
  ngOnInit(){
    this._service.getTasks().then((response)=>{
      this.tasks = response;
      console.log("tarefas", this.tasks);
    })
  }
  markAsDone(data: any){
    data.done = !data.done;
    this._service.saveTask(data);
  }
}
