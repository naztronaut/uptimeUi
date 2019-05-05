import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentStatusComponent } from './current-status.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatTableModule} from '@angular/material';

describe('CurrentStatusComponent', () => {
  let component: CurrentStatusComponent;
  let fixture: ComponentFixture<CurrentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentStatusComponent ],
      imports: [FormsModule, MatTableModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
