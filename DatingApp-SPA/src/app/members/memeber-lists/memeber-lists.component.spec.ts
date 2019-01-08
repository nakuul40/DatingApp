/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MemeberListsComponent } from './memeber-lists.component';

describe('MemeberListsComponent', () => {
  let component: MemeberListsComponent;
  let fixture: ComponentFixture<MemeberListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeberListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeberListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
