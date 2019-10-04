//Class models for the basket items and output items
export class basketItemModel{
    unit: number;
    exempt: boolean;
    imported: boolean;
    name: string;
    price: number;
}

export class itemModel {
    unit: number;
    name: string;
    price: number;
}

export class receiptItemTaxTotalItemModel {
    receiptItemList: Array<itemModel>;
    saleTax: number;
    totalPrice: number;
    constructor() {
        this.receiptItemList = [];
    }
}

export class receiptItemTaxTotalModel {
    receiptItemTaxTotalItemList: Array<receiptItemTaxTotalItemModel>;
    constructor() {
        this.receiptItemTaxTotalItemList = [];
    }
}