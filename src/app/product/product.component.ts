import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(public router: Router){

  }
  //public, private, protected
  public product_name:string = "";
  public product_obj:any = {product_name:""}
  public product_array:any = []

  //function on initialize
  // ngOnInit(){
    // alert("You're welcome")
    // this.addProduct()
  // }

  //function in angular
  addProduct(){
    //  alert(this.product_name)
    let product_oj = {product_name: this.product_name}
    this.product_array.push(product_oj)

  }

  deleteProduct(i:number){

    // let product = [...this.product_array]
    let filtered  = this.product_array.filter((item:any, index:number)=>{
      return i !==  index
    })
    console.log({filtered, i})
    this.product_array = filtered

  }
  submitForm(){
    // console.log(userForm)
  }

  moveAround(){
    this.router.navigate(['/signin'])
  }

}
