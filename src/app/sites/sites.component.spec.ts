import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { SitesComponent } from './sites.component';
import {MatDialogModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SitesComponent', () => {
  let component: SitesComponent;
  let fixture: ComponentFixture<SitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesComponent ],
      imports: [MatTableModule, HttpClientTestingModule, MatDialogModule, MatSnackBarModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
