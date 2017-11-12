import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPlusMinus10Component } from './tab-plus-minus-10.component';

describe('TabPlusMinus10Component', () => {
  let component: TabPlusMinus10Component;
  let fixture: ComponentFixture<TabPlusMinus10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPlusMinus10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPlusMinus10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
