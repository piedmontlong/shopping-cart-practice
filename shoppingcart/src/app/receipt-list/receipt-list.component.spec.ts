import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MAT_DIALOG_DATA } from '@angular/material'; 
import { ReceiptListComponent } from './receipt-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ReceiptListComponent', () => {
  let component: ReceiptListComponent;
  let fixture: ComponentFixture<ReceiptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptListComponent ],
      imports: [ MatDialogModule ], // add here
       providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} } // add here
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
