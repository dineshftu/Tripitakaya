import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuthrayaPage } from './suthraya.page';

describe('SuthrayaPage', () => {
  let component: SuthrayaPage;
  let fixture: ComponentFixture<SuthrayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuthrayaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuthrayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
