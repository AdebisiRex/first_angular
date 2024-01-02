import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { productGuard } from './guards/product.guard';

const routes: Routes = [
  // {path: "product", component: ProductComponent},
  {path: "signin", component: HomePageComponent},
  {path: "product", canActivateChild: [productGuard], children:[
    
    {path: "", component: ProductComponent},
    {path: ":id", component: DisplayProductComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
