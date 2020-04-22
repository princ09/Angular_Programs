export class Product {
    id:number;
    productName:string;
    price:number;
    qty:number;
    constructor(id:number,productName:string,price:number,qty:number){
        this.id=id;
        this.productName=productName;
        this.price=price;
        this.qty=qty;
    }
}
