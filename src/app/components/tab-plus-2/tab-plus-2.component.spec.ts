import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPlus2Component } from './tab-plus-2.component';

describe('TabPlus2Component', () => {
  let component: TabPlus2Component;
  let fixture: ComponentFixture<TabPlus2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPlus2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPlus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
