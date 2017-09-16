import { getSelectedTaxonIds } from './../../reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { CheckoutService } from './../../../core/services/checkout.service';
import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Product } from './../../../core/models/product';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  @Input('taxonIds') selectedTaxonIds;
  @Input() toggleLayout;

  public imageData: string[] = ["http://t3.gstatic.com/images?q=tbn:ANd9GcRGiFIfSUgkHw5pn_-SNBXJa-y_pPB9dM92lyp8rO6-5GiTcvfK",
    "https://s3.amazonaws.com/titlepages.leanpub.com/learnrubyonrails/hero?1480060474",
    "https://smhttp-ssl-54709-media.nexcesscdn.net/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/k/skinny-bands-neat-stack.png",
    "https://cdn.shopify.com/s/files/1/0870/8326/products/harvey_2nd_class_1_large__02526_d353e676-e236-4246-88bf-690550fa149b_large.jpeg?v=1448108932",
    "https://lf.lids.com/hwl?set=sku[20732156],c[2],w[400],h[300]&call=url[file:product]",
    "http://localhost:3000//spree/products/34/large/ruby_baseball.png?1505496812",
    "https://richardolga.files.wordpress.com/2015/09/cinema-ticket.jpg",
    "http://localhost:3000//spree/products/41/large/spree_jersey.jpeg?1505496815",
    "http://localhost:3000//spree/products/40/large/spree_spaghetti.jpeg?1505496814",
    "http://localhost:3000//spree/products/38/large/spree_ringer_t.jpeg?1505496814",
    "http://lh4.ggpht.com/-gtqbl42M-4g/T_cJzqeqomI/AAAAAAAACG8/tfbUW4egt0g/s72-c/the%252520best%252520book%252520for%252520java_thumb%25255B3%25255D.png?imgmax=800",
    "https://cdn-images-1.medium.com/max/1600/0*tOsY7uh2s28NeYqQ.jpg",
    "https://cdn-images-1.medium.com/max/1600/0*tOsY7uh2s28NeYqQ.jpg",
    "https://cdn.sparkfun.com//assets/parts/4/3/6/9/10116-01.jpg",
    "https://www.arduino.cc/en/uploads/Tutorial/ArduinoUNO_bb.png",
    "http://localhost:3000//spree/products/41/large/spree_jersey.jpeg?1505496815"
  ];

  constructor(
    private checkoutService: CheckoutService,
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions) {
  }

  ngOnInit() { }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

  addToCart(product: Product) {
    const variant_id = product.master.id;
    this.store.dispatch(this.checkoutActions.addToCart(variant_id));

  }

  getMargin() {
    return this.toggleLayout.size === 'COZY' ? '0 15px 20px 0' : '0 80px 20px 0';
  }

}
