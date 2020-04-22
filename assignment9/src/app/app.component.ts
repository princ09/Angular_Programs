import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment9';
  message:string = "";
  gttenthou:boolean = false;
  totalPrice:number=0;
  productArr: Product[] = [
    new Product(100, "Mobile", 10000, 1),
    new Product(101, "Bag", 500, 1),
    new Product(102, "Shoe", 1000, 1),
    new Product(103, "Groceries", 700, 1),
    new Product(104, "Furniture", 15000, 1),
    new Product(105, "Laptop", 35000, 1)
];
quantityy:number;
preQty:number=0;

onTextChange(event):void{
  if(event==null|| event==""){
    console.log(event)
    this.message="Please Enter Quantity"
  }else{
    this.message="";
  }
 
}
calculateTotal():void{
  console.log("This called calculateTotal")

  this.productArr.forEach(
    (product)=>{
      this.totalPrice+=product.price*product.qty;
    }
  )
  if(this.totalPrice>100000){
    this.gttenthou=true;
  }
}
changeTotal(product:any):void{
  console.log("This called change")
  this.totalPrice-=product.price*(this.preQty);
  this.totalPrice+=product.price*(product.qty);
  this.preQty = product.qty;
  if(this.totalPrice>100000){
    this.gttenthou=true;
  }
}
deleteProduct(product:Product):void{
  console.log("This called delete")

  this.productArr = this.productArr.filter((prod)=>{
    if(prod.id==product.id){
      return false;
    }else{
      return true;
    }
  });
  this.totalPrice-=product.price*product.qty;
  if(this.totalPrice>100000){
    this.gttenthou=true;
  }
}
ngOnInit():void{
  console.log("This called init")
  this.calculateTotal();
}
}
