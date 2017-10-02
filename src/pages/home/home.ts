import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from "../new-task/new-task";
import { TasksPage } from "../tasks/tasks";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myColor: string = "#dbd9d9";
  public pages = [
    { component:NewTaskPage },
    { component:TasksPage }
  ];
  constructor(public navCtrl: NavController) {

  }
  openNewTask() {
    this.navCtrl.push(this.pages[0].component);
  }
  openTasks() {
    this.navCtrl.push(this.pages[1].component);
  }
}
