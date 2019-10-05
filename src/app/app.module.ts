import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoGetComponent } from './producto/producto-get/producto-get.component';
import { ProductoCreateComponent } from './producto/producto-create/producto-create.component';
import { ProductosService } from './producto/productos.service';
import { ProductoEditComponent } from './producto/producto-edit/producto-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoGetComponent,
    ProductoCreateComponent,
    ProductoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
