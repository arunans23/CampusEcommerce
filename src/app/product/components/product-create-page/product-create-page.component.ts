import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-create-page',
  templateUrl: './product-create-page.component.html',
  styleUrls: ['./product-create-page.component.scss']
})
export class ProductCreatePageComponent implements OnInit {

  productForm: FormGroup;
  formSubmit = false;
  title = environment.AppName;
  registerSubs: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const values = this.productForm.value;
    const keys = Object.keys(values);
    this.formSubmit = true;

    this.productForm.reset();

    alert("Your product has been successfully created");

    // if (this.signUpForm.valid) {
    //   this.registerSubs = this.authService.register(values).subscribe(data => {
    //     const errors = data.errors;
    //     if (errors) {
    //       keys.forEach(val => {
    //         if (errors[val]) { this.pushErrorFor(val, errors[val][0]); };
    //       });
    //     }
    //   });
    // } else {
    //   keys.forEach(val => {
    //     const ctrl = this.signUpForm.controls[val];
    //     if (!ctrl.valid) {
    //       this.pushErrorFor(val, null);
    //       ctrl.markAsTouched();
    //     };
    //   });
    // }
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.productForm.controls[ctrl_name].setErrors({'msg': msg});
  }

  initForm() {
    const name = '';
    const price = '';
    const topics = '';
    const image = '';
    const category = '';
    const methods = '';


    this.productForm = this.fb.group({
        'name': [name, Validators.required ],
        'price': [price, Validators.required],
        'topics':[topics, Validators.required],
        'image':[image, Validators.required],
        'category':[category, Validators.required],
        'methods':[methods, Validators.required]
      }
    );
  }

  ngOnDestroy() {
    if (this.registerSubs) { this.registerSubs.unsubscribe(); }
  }

}
