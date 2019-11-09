import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  uri = 'http://localhost:4000/products';
  //img = 'http://localhost:4000/image';
  files_static = 'http://localhost:4000/uploads';

  //public uploader: FileUploader = new FileUploader({ url: `${this.uri}/image-upload`, itemAlias: 'photo'});

  constructor(private http: HttpClient, private router: Router) { }

  getProductos() {
    console.log(`${this.uri}`);
    return this
            .http
            .get(`${this.uri}`);
  }

  /*getImage(filename) {
    console.log(`${this.img}/${filename}`);
    console.log("uri => " + JSON.stringify(this.http.get(`${this.img}/${filename}`)));
    console.log("uri => " + this.http.get(`${this.img}/${filename}`));
    return this.http.get(`${this.img}/${filename}`).
      subscribe(res => console.log("Done"));
  }*/

  getFile(filename) {
    return `${this.files_static}/${filename}`;
    //return this.http.get(`http://localhost:4000/uploads/${filename}`);
  }

  /*
    Agregar nuevo producto
    Los parametros deben llamarse igual que los campos en la tabla de la bd
  */
  createProducto(name, description, price, filename) {
    const obj = {
      name,
      description,
      price,
      filename
    };
    console.log(obj);
    this.http.post(`${this.uri}/create`, obj)
        .subscribe(res => console.log("Done"));

    //console.log(this.uploadImage(image));
    //console.log(this.uploader.uploadAll());
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

  uploadImage(image: File, filename) {
    const formData = new FormData();

    formData.append('image', image, filename);

    this.http.post(`${this.uri}/image-upload`, formData)
              .subscribe(res => console.log(res));
  }

}
