import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPlus3Component } from './tab-plus-3.component';

describe('TabPlus3Component', () => {
  let component: TabPlus3Component;
  let fixture: ComponentFixture<TabPlus3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPlus3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPlus3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
