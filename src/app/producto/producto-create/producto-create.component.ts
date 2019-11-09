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
  //selectedFile: ImageSnippet;
  selectedFile: File = null;
  newFilename: string = null;

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
    //this.processFile(imageInput);
    this.ps.createProducto(ProductName, ProductDescription, ProductPrice, this.newFilename);
    //console.log("image: "+ imageInput);
    //this.ps.uploader.uploadAll();
    this.uploadImage();
  }

  onFileSelected(event) {
    console.log(event);

    this.selectedFile = event.target.files[0];

    var fileExtension =
      (this.selectedFile.name.substring(
        this.selectedFile.name.lastIndexOf('.'),
        this.selectedFile.name.length));

    this.newFilename = Date.now().toString() + fileExtension;
    console.log(this.newFilename);

    var blob = this.selectedFile.slice(0, this.selectedFile.size, 'image/'+fileExtension);
    var newFile = new File([blob], this.newFilename, { type: 'image/'+fileExtension });
    this.selectedFile = newFile;
  }

  uploadImage() {
    this.ps.uploadImage(this.selectedFile, this.newFilename);
  }

  /*processFile(imageInput: any) {
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
  }*/

  ngOnInit() {
    //this.ps.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    /*this.ps.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };*/
  }

}
