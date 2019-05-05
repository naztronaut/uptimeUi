import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { OutagesComponent } from './outages.component';
import {MatTableModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('OutagesComponent', () => {
  let component: OutagesComponent;
  let fixture: ComponentFixture<OutagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutagesComponent ],
      imports: [MatTableModule, HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
