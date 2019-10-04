import { Component, OnInit } from '@angular/core';
import { baskets } from '../baskets';
import { itemModel, receiptItemTaxTotalItemModel, receiptItemTaxTotalModel} from '../models/receipt-item';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {

  baskets = baskets;
  receipts: any;
  receiptItemTaxTotal: receiptItemTaxTotalModel;
  constructor() { 
    this.receiptItemTaxTotal = new receiptItemTaxTotalModel();
  }

  ngOnInit() {
    this.calculateReceipt();
  }

  //Calculate the sale tax and the total
  calculateReceipt(){
    //Loop through all basket in the baskets to process items in the basket and calculate the total 
    for(let i = 0; i < baskets.length; i++ ){
      let basket = baskets[i];
      let receiptItemTaxTotalItem: receiptItemTaxTotalItemModel = new receiptItemTaxTotalItemModel();
      let totalSaleTax = 0.0;
      let totalPrice = 0.0;

      for(let j = 0; j < basket.length; j++){
        let item = basket[j];
        
        //Calculate the sale tax based on the requirements
        let saleTax = 0.0;
        if(!item.exempt)
          saleTax +=  0.1 * item.price;
        if(item.imported)
          saleTax += 0.05 * item.price;

        //Input the values into the new item object
        let receiptItem:itemModel = new itemModel();
        receiptItem.unit = item.unit;
        receiptItem.name = item.name;
        receiptItem.price = Math.round((item.price + saleTax) * 100) / 100;
        receiptItemTaxTotalItem.receiptItemList.push(receiptItem);

        //Add to the total
        totalSaleTax += saleTax;
        totalPrice += receiptItem.price;
      }

      //Add the total values and the item list into the object of the total
      receiptItemTaxTotalItem.saleTax = Math.round(totalSaleTax * 100) / 100;
      receiptItemTaxTotalItem.totalPrice = Math.round(totalPrice * 100) / 100;
      this.receiptItemTaxTotal.receiptItemTaxTotalItemList.push(receiptItemTaxTotalItem);
    }
  
  }

}
