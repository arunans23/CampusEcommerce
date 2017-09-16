import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/index';

import { RouterModule } from '@angular/router';

// For Temp Puropose
// TODO: Remove this from here
import { ProductService } from './../core/services/product.service';

// Components
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductDetailsComponent } from './components/product-detail-page/product-details/product-details.component';
import { ProductDescriptionComponent } from './components/product-detail-page/product-description/product-description.component';
import { ProductImagesComponent } from './components/product-detail-page/product-images/product-images.component';
import { ProductPriceInfoComponent } from './components/product-detail-page/product-price-info/product-price-info.component';
import { ProductVariantsComponent } from './components/product-detail-page/product-variants/product-variants.component';
import { ProductComponent } from './product.component';

// Routes
import { ProductRoutes as routes } from './product.routes';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
import {ProductCreatePageComponent} from "./components/product-create-page/product-create-page.component";


@NgModule({
  declarations: [
    // components
    ProductDetailPageComponent,
    ProductCreatePageComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductImagesComponent,
    ProductPriceInfoComponent,
    ProductDescriptionComponent,
    ProductVariantsComponent
    // pipes
  ],
  exports: [
    // components
    ProductCreatePageComponent,
    ProductDetailPageComponent,
    ProductDetailsComponent,
    ProductImagesComponent,
    ProductPriceInfoComponent,
    ProductDescriptionComponent,
    ProductVariantsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
  ]
})
export class ProductModule {}
