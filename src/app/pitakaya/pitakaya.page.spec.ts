import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitakayaPage } from './pitakaya.page';

describe('PitakayaPage', () => {
  let component: PitakayaPage;
  let fixture: ComponentFixture<PitakayaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitakayaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitakayaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
