import { Router } from '@angular/router';
import { SearchActions } from './../../home/reducers/search.actions';
import { getTaxonomies } from './../../product/reducers/selectors';
import { getTotalCartItems } from './../../checkout/reducers/selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { getAuthStatus } from '../../auth/reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from '../../auth/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  totalCartItems: Observable<number>;
  taxonomies$: Observable<any>;
  taxonList = [{
    "id": 4,
    "name": "Books",
    "pretty_name": "Categories -> Books",
    "permalink": "categories/books",
    "parent_id": 1,
    "taxonomy_id": 1,
    "taxons": null},
  {
    "id": 3,
    "name": "Bags",
    "pretty_name": "Categories -> Bags",
    "permalink": "categories/bags",
    "parent_id": 1,
    "taxonomy_id": 1,
    "taxons": null
  }, {
    "id": 8,
    "name": "Electronics",
    "pretty_name": "Brand -> Electronics",
    "permalink": "brand/electronics",
    "parent_id": 2,
    "taxonomy_id": 2,
    "taxons": null
  }, {
     "id": 9,
    "name": "Tshirts",
    "pretty_name": "Brand -> Tshirts",
    "permalink": "brand/tshirts",
    "parent_id": 2,
    "taxonomy_id": 2,
    "taxons": null
  }, {
    "id": 10,
    "name": "Spree",
    "pretty_name": "Brand -> Spree",
    "permalink": "brand/spree",
    "parent_id": 2,
    "taxonomy_id": 2,
    "taxons": null
  }, {
    "id": 11,
    "name": "Rails",
    "pretty_name": "Brand -> Rails",
    "permalink": "brand/rails",
    "parent_id": 2,
    "taxonomy_id": 2,
    "taxons": null
  }];
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private authActions: AuthActions,
    private searchActions: SearchActions,
    private router: Router
  ) {
    this.taxonomies$ = this.store.select(getTaxonomies);
  }

  ngOnInit() {
    this.store.dispatch(this.authActions.authorize());
    this.isAuthenticated = this.store.select(getAuthStatus);
    this.totalCartItems = this.store.select(getTotalCartItems);
  }

  selectTaxon(taxon) {
    this.router.navigateByUrl('/');
    this.store.dispatch(this.searchActions.addFilter(taxon));
  }

}
