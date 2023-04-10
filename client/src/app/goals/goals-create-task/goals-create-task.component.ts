import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { DialogConfig, Task, User } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-goals-create-task',
  templateUrl: './goals-create-task.component.html',
  styleUrls: ['./goals-create-task.component.scss']
})
export class GoalsCreateTaskComponent{


}
