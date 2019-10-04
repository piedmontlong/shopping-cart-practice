import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, AbstractControl, FormGroup } from "@angular/forms";
import { basketItemModel } from '../models/receipt-item';
import { baskets } from '../baskets';

@Component({
  selector: 'app-inputbasket',
  templateUrl: './inputbasket.component.html',
  styleUrls: ['./inputbasket.component.css']
})
export class InputbasketComponent implements OnInit {

  baskets = baskets;
  form: FormGroup;
  unit: AbstractControl;
  exempt: AbstractControl;
  imported: AbstractControl;
  itemName: AbstractControl;
  price: AbstractControl;
  itemsList: Array<basketItemModel>;
  dialogRef: MatDialogRef<InputbasketComponent>;
  
  constructor(private fb: FormBuilder
    ) {
    this.form = fb.group({
      'unit': [1, Validators.required],
      'exempt': [false, Validators.required],
      'imported': [false, Validators.required],
      'itemName': ['', Validators.required],
      'price': [0.0, Validators.required]
    });
    this.unit = this.form.controls['unit'];
    this.exempt = this.form.controls['exempt'];
    this.imported = this.form.controls['imported'];
    this.itemName = this.form.controls['itemName'];
    this.price = this.form.controls['price'];
    this.itemsList = [];
  }

  ngOnInit() {
  }

  addItem() {
    if (this.form.valid) {
      let newItem: basketItemModel = new basketItemModel();
      newItem.unit = this.unit.value;
      newItem.exempt = this.exempt.value;
      newItem.imported = this.imported.value;
      newItem.name = this.itemName.value;
      newItem.price = this.price.value;
      this.itemsList.push(newItem);
    }
  }

  cancelClick() {
    this.dialogRef.close(true);
  }
  submitBasket() {
    console.log(this.baskets.length);
    if (this.form.valid && this.itemsList.length > 0) {
      this.baskets.push(this.itemsList);
    }
    console.log(this.baskets.length);
  }

}
