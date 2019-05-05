import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SchedulesComponent } from './schedules.component';
import {MatDialogModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';

describe('SchedulesComponent', () => {
  let component: SchedulesComponent;
  let fixture: ComponentFixture<SchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesComponent ],
      imports: [MatTableModule, HttpClientTestingModule, FormsModule, MatDialogModule, MatSnackBarModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
