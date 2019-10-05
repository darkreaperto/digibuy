import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductoGetComponent } from './producto/producto-get/producto-get.component';
import { ProductoCreateComponent } from './producto/producto-create/producto-create.component';
import { ProductoEditComponent } from './producto/producto-edit/producto-edit.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductoGetComponent,
    //canActivate: [AuthenticationGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'productos/create',
    component: ProductoCreateComponent
  },
  {
    path: 'productos/edit/:id',
    component: ProductoEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
