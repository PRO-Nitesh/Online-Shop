import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  readonly addlink="https://uiexercise.theproindia.com/api/Product/AddProduct";
  constructor(private https:HttpClient){}
  products: {
    ProductId?: string;
    ProductName: string;
    Quantity: number;
    IsActive: boolean;
} = {
    ProductId: '',
    ProductName: '',
    Quantity: 0,
    IsActive: false
};
  addproduct(pro:{Pname:string,Pquan:number}){
    this.products={
    
      ProductName:pro.Pname,
      Quantity:pro.Pquan,
      IsActive:true
    }
    this.https.post(this.addlink,this.products).subscribe((res)=>{
      console.log(res);
    })
  }
}
