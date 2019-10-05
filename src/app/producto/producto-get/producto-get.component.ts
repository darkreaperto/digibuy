import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from '../producto';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-get',
  templateUrl: './producto-get.component.html',
  styleUrls: ['./producto-get.component.css']
})

export class ProductoGetComponent implements OnInit {

  productos: Product[];
  constructor(private ps: ProductosService, private router: Router) { }

  deleteProducto(id) {
    this.ps.deleteProducto(id)
      .subscribe(res => {
        this.productos.splice(id, 1);
        this.getProductos();
      });
    //this.getProductos();
  }

  getProductos() {
    this.ps
      .getProductos()
      .subscribe((products: Product[]) => {
        this.productos = products;
      });
  }

  ngOnInit() {
    this.getProductos();
  }

}
