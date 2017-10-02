import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TaskService } from "../../domain/tasks/task-service";
import { Task } from "../../domain/tasks/task";

/**
 * Generated class for the NewTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage implements OnInit { 
  
  public task:Task;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _service:TaskService, 
    private _alertCtrl: AlertController,
  ) {}

  ngOnInit(){
    this.task = new Task('', '', false);
  }
  public saveTask(){
    this._service.saveTask(this.task).then((response)=>{
      if(response){
        this._alertCtrl.create({
          title: 'Task cadastrada com sucesso',
          buttons: [{ text: 'Ok'}]
        }).present();
        this.task ={description:'',name:'', done: false
        }
      }
    })
  }
}
