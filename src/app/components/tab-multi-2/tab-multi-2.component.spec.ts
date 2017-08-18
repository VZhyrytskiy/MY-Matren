import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMulti2Component } from './tab-multi-2.component';

describe('TabMulti2Component', () => {
  let component: TabMulti2Component;
  let fixture: ComponentFixture<TabMulti2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMulti2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMulti2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
