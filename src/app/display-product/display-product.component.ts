import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent {
  constructor(public actRoute:ActivatedRoute){}

  ngOnInit(){
    console.log(this.actRoute)
    let index  = this.actRoute.snapshot.params['id']
    console.log(index)
  }
}
