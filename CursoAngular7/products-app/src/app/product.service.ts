import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFronServer: any[] = [
    {id: 1, name: 'Laptop', department_id: 4, price: 40, description: 'Laptop d'},
    {id: 2, name: 'Shirt', department_id: 1, price: 10, description: 'Shirt Hello'},
    {id: 3, name: 'Polo', department_id: 1, price: 50, description: 'Polo Test'},
    {id: 4, name: 'Mouse', department_id: 3, price: 20, description: 'Mouse description'}
  ]

  private products : Product[] = [];
  private nextId: number;
  
  onNewProduct : EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService : DepartmentService) {

    for(let p of this.dataFronServer){
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.department_id)
      })
      this.nextId = p.id + 1;
    }

   }

  getProducts(): Product[]{
    return this.products;
  }

  addProduct(p: Product){
    let prod : Product = {id: this.nextId++, ...p};
    this.products.push(prod);
    console.log(this.products);
    this.onNewProduct.emit(prod);
  }


}
