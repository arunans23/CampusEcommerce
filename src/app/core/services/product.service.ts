import { Observable } from 'rxjs/Observable';
import { HttpService } from './http';
import { Injectable } from '@angular/core';
import { Product} from '../models/product';

@Injectable()
export class ProductService {

  /**
   * Creates an instance of ProductService.
   * @param {HttpService} http
   *
   * @memberof ProductService
   */
  constructor(private http: HttpService) { }

  /**
   *
   *
   * @param {string} id
   * @returns {Observable<any>}
   *
   * @memberof ProductService
   */
  getProduct(id: string): Observable<any> {
    return this.http.get(`/spree/api/v1/products/${id}`)
    .map(res => res.json());
  }

  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */
  getTaxonomies(): any {

    var check = {
      "taxonomies": [
        {
          "id": 1,
          "name": "Categories",
          "root": {
            "id": 1,
            "name": "Categories",
            "pretty_name": "Categories",
            "permalink": "categories",
            "parent_id": null,
            "taxonomy_id": 1,
            "taxons": [
              {
                "id": 3,
                "name": "Books",
                "pretty_name": "Categories -> Books",
                "permalink": "categories/books",
                "parent_id": 1,
                "taxonomy_id": 1,
                "taxons": [

                ]
              },
              {
                "id": 4,
                "name": "Electronic gadgets",
                "pretty_name": "Categories -> Electronic gadgets",
                "permalink": "categories/electronicsgadgets",
                "parent_id": 1,
                "taxonomy_id": 1,
                "taxons": [

                ]
              },
              {
                "id": 5,
                "name": "Electronic equipments",
                "pretty_name": "Categories -> Electronic equipments",
                "permalink": "categories/electronicequipments",
                "parent_id": 1,
                "taxonomy_id": 1,
                "taxons": [
                  {
                    "id": 6,
                    "name": "Shirts",
                    "pretty_name": "Categories -> Clothing -> Garments",
                    "permalink": "categories/garments",
                    "parent_id": 5,
                    "taxonomy_id": 1,
                    "taxons": [

                    ]
                  },
                  {
                    "id": 7,
                    "name": "T-Shirts",
                    "pretty_name": "Categories -> Clothing -> T-Shirts",
                    "permalink": "categories/clothing/t-shirts",
                    "parent_id": 5,
                    "taxonomy_id": 1,
                    "taxons": [

                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          "id": 2,
          "name": "Brand",
          "root": {
            "id": 2,
            "name": "Brand",
            "pretty_name": "Brand",
            "permalink": "brand",
            "parent_id": null,
            "taxonomy_id": 2,
            "taxons": [
              {
                "id": 8,
                "name": "Garments",
                "pretty_name": "Brand -> Garments",
                "permalink": "brand/garments",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": [

                ]
              },
              {
                "id": 9,
                "name": "Tickets",
                "pretty_name": "Brand -> Tickets",
                "permalink": "brand/tickets",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": [

                ]
              },
              {
                "id": 11,
                "name": "Others",
                "pretty_name": "Brand -> Rails",
                "permalink": "brand/rails",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": [

                ]
              }
            ]
          }
        }
      ],
      "count": 2,
      "current_page": 1,
      "pages": 1
    };
    return this.http.get(`/spree/api/v1/taxonomies?set=nested`)
    .map(function(res){
      console.log(res.json());
      return check;
    });
  }

  /**
   *
   *
   * @returns {*}
   *
   * @memberof ProductService
   */
  getProducts(): any {
    return this.http.get(`/spree/api/v1/products`)
    .map(res => res.json());
  }


  createProduct(product: Product): any {
    return this.http.post('/api/v1/products?product[name]=' + product.name +
        '&product[price]=' + product.price + '&product[shipping_category_id]=1', {})
    .map(res => res.json());
  }
}
