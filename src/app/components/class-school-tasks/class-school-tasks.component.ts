/**
 * Компонент для отображения заданий по классической русской школе
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DataService } from '../../services';

@Component({
  selector: 'app-class-school-tasks',
  templateUrl: './class-school-tasks.component.html',
  styleUrls: ['./class-school-tasks.component.less']
})
export class ClassSchoolTasksComponent implements OnInit {
  currentSubtask = {
    classID: null,
    topicID: null,
    taskID: null,
    subtaskIndex: null,
    subtask: null,
    task: null
  };

  condition: string;
  cases: Array<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    /**
     * По параметрам урла получаем текущую подзадачу и рендерим ее.
     */
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: Params) => {
          this.currentSubtask.classID = params.get('class');
          this.currentSubtask.topicID = params.get('topic');
          this.currentSubtask.taskID = params.get('task');

          this.dataService.setClass(+this.currentSubtask.classID);
          this.dataService.setTopic(+this.currentSubtask.topicID);

          return of(this.dataService.getTask(+this.currentSubtask.taskID));
        })
      )
      .subscribe(
        task => {
          this.currentSubtask.task = task;
          this.renderSubtask();
        },
        err => console.log(err)
      );
  }

  onNext() {
    // Сначала получаем индекс подзадачи
    this.currentSubtask.subtaskIndex = this.dataService.getNextSubtaskIndex(
      this.currentSubtask.task
    );
    // а затем только задачу, так как ее ид может измениться, если закончаться подзадачи
    this.currentSubtask.taskID = this.dataService.getTaskID();

    this.router.navigate([
      'class-school',
      this.currentSubtask.classID,
      this.currentSubtask.topicID,
      this.currentSubtask.taskID,
      this.currentSubtask.subtaskIndex
    ]);
  }

  private renderSubtask() {
    this.currentSubtask.subtask = this.dataService.getSubtask(
      this.currentSubtask.task
    );
    this.condition = this.dataService.getSubtaskCondition(
      this.currentSubtask.subtask
    );
    this.cases = this.dataService.getSubtaskCases(this.currentSubtask.subtask);
  }
}
