import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamasPage } from './damas.page';

describe('DamasPage', () => {
  let component: DamasPage;
  let fixture: ComponentFixture<DamasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
