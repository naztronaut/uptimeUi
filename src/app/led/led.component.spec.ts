import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedComponent } from './led.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatTableModule} from '@angular/material';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('LedComponent', () => {
  let component: LedComponent;
  let fixture: ComponentFixture<LedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedComponent ],
      imports: [FormsModule, MatTableModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
