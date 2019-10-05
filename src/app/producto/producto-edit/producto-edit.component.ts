import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  angForm: FormGroup;
  producto: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ps: ProductosService,
              private fb: FormBuilder) {
                this.createForm();
              }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required],
      ProductDescription: ['', Validators.required],
      ProductPrice: ['', Validators.required]
    });
  }

  updateProducto(name, description, price, id) {
    this.route.params.subscribe(params => {
      this.ps.updateProducto(name, description, price, params.id);
      //this.router.navigate(['productos']);
    });
  }

  getProductos() {
    this.route.params.subscribe(params => {
        this.ps.editProducto(params['id']).subscribe(res => {
          this.producto = res;
      });
    });
  }

  ngOnInit() {
    this.getProductos();
  }

}
