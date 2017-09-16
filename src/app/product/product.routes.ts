import { Routes } from '@angular/router';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductComponent } from './product.component';
import { ProductCreatePageComponent} from './components/product-create-page/product-create-page.component';

export const ProductRoutes: Routes = [
  { path: 'create', component: ProductCreatePageComponent},
  { path: '', component: ProductComponent, pathMatch: 'full'},
  { path: ':id', component: ProductDetailPageComponent }

];

