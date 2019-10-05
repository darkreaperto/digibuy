import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../productos.service';
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {

  angForm: FormGroup;
  selectedFile: ImageSnippet;

  constructor(private fb: FormBuilder,
              private ps: ProductosService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ]
    });
  }

  createProducto(ProductName, ProductDescription, ProductPrice) {
    this.ps.createProducto(ProductName, ProductDescription, ProductPrice);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.ps.uploadImage(this.selectedFile.file).subscribe(
        (res) => {

        },
        (err) => {

        })
    });

    reader.readAsDataURL(file);
  }

  ngOnInit() {
  }

}
