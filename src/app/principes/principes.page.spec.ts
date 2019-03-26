import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipesPage } from './principes.page';

describe('PrincipesPage', () => {
  let component: PrincipesPage;
  let fixture: ComponentFixture<PrincipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
