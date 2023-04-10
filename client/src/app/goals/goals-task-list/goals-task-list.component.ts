import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-goals-task-list',
  templateUrl: './goals-task-list.component.html',
  styleUrls: ['./goals-task-list.component.scss']
})
export class GoalsTaskListComponent{

  @Input() taskList!: Task[];
  @Input() title!: string;




}
