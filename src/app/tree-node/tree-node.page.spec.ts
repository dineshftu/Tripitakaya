import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodePage } from './tree-node.page';

describe('TreeNodePage', () => {
  let component: TreeNodePage;
  let fixture: ComponentFixture<TreeNodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
