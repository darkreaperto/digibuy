import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient, private router: Router) { }

  getProductos() {
    console.log(`${this.uri}`);
    return this
            .http
            .get(`${this.uri}`);
  }

  /*
    Agregar nuevo producto
    Los parametros deben llamarse igual que los campos en la tabla de la bd
  */
  createProducto(name, description, price) {
    const obj = {
      name,
      description,
      price
    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)
        .subscribe(res => console.log("Done"));
  }

  editProducto(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProducto(name, description, price, id) {
    const obj = {
      name,
      description,
      price
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => this.router.navigate(['productos']));
  }

  deleteProducto(id) {
    return this
            .http
            .get(`${this.uri}/delete/${id}`);
            //.subscribe(res => this.router.navigate(['productos']));
  }

  public uploadImage(image: File) {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }

}
