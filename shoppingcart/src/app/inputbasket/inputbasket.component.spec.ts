import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { InputbasketComponent } from './inputbasket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MAT_DIALOG_DATA } from '@angular/material';

describe('InputbasketComponent', () => {
  let component: InputbasketComponent;
  let fixture: ComponentFixture<InputbasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputbasketComponent ],
      imports: [MatDialogModule, ReactiveFormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} } // add here
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
