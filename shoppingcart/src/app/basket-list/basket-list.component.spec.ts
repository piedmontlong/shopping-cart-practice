import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BasketListComponent } from './basket-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BasketListComponent', () => {
  let component: BasketListComponent;
  let fixture: ComponentFixture<BasketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BasketListComponent],
      imports: [MatDialogModule], // add here
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} } // add here
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openAddForm method', () => {
    const onClickMock = spyOn(component, 'openAddForm');
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(onClickMock).toHaveBeenCalled();
  });
});