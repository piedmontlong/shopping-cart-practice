import { Component, OnInit } from '@angular/core';
import { baskets } from '../baskets';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InputbasketComponent } from '../inputbasket/inputbasket.component'

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.css']
})
export class BasketListComponent implements OnInit {

  //Import the baskets data 
  baskets = baskets;
  constructor(public dialog: MatDialog) { 
  }

  ngOnInit() {
  }

  //For the remove event
  remove(item, index){
    this.baskets.splice(index, 1)
  }

  openAddForm(): void{
    const dialogRef = this.dialog.open(InputbasketComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
