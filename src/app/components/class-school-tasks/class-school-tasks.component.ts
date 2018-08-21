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
  selectedClassID: string;
  selectedTopicID: string;
  selectedTaskID: string;
  selectedSubtaskID: string;

  task: any;
  condition: string;
  cases: Array<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((params: Params) => {
          this.selectedClassID = params.get('class');
          this.selectedTopicID = params.get('topic');
          this.selectedTaskID = params.get('task');

          this.dataService.setClass(+this.selectedClassID);
          this.dataService.setTopic(+this.selectedTopicID);

          return of(this.dataService.getTask(+this.selectedTaskID));
        })
      )
      .subscribe(
        task => {
          this.task = task;
          this.renderSubtask();
        },
        err => console.log(err)
      );
  }

  onNext() {
    // Сначала получаем индекс
    const subtaskIndex = this.dataService.getNextSubtaskIndex(this.task);
    // а затем только задачу, так как ее ид может измениться, если закончаться подзадачи
    const taskID = this.dataService.getTaskID();

    console.log('class', this.selectedClassID);
    console.log('topic', this.selectedTopicID);
    console.log('taskID', taskID);
    console.log('subtaskIndex', subtaskIndex);

    this.router.navigate([
      'class-school',
      this.selectedClassID,
      this.selectedTopicID,
      taskID,
      subtaskIndex
    ]);
  }

  private renderSubtask() {
    const subtask = this.dataService.getSubtask(this.task);
    this.condition = this.dataService.getSubtaskCondition(subtask);
    this.cases = this.dataService.getSubtaskCases(subtask);
  }
}
