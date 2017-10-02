import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TasksPage } from "../pages/tasks/tasks";
import { NewTaskPage } from "../pages/new-task/new-task";
import { Storage, IonicStorageModule } from '@ionic/storage';
import { TaskService } from "../domain/tasks/task-service";
import { TaskDao } from "../domain/tasks/task.dao";

function provideStorage() {
  return new Storage({
    name: 'taskdb',
    storeName: 'tasks',
    driverOrder: ['indexeddb', 'sqlite']
  });
}

@NgModule({
  declarations: [                     
    MyApp,
    HomePage,
    TasksPage,
    NewTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TasksPage,
    NewTaskPage
  ],
  providers: [
    TaskService,
    TaskDao,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: Storage, useFactory: provideStorage},
  ]
})
export class AppModule {}
