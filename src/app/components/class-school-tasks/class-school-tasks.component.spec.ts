import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSchoolTasksComponent } from './class-school-tasks.component';

describe('ClassSchoolTasksComponent', () => {
  let component: ClassSchoolTasksComponent;
  let fixture: ComponentFixture<ClassSchoolTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassSchoolTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassSchoolTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
