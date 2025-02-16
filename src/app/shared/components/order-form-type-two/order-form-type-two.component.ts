import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Product } from '../../models/product';
import { AddOrderService } from '../../services/add-order/add-order.service';
import { ProductsService } from '../../services/products/products.service';
import { OrderItem } from '../../models/order';
import { DecimalPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-order-form-type-two',
  templateUrl: './order-form-type-two.component.html',
  styleUrls: ['./order-form-type-two.component.scss'],
  standalone:true,
  imports: [
    DecimalPipe,
    NgIf,
    ReactiveFormsModule
  ]
})
export class OrderFormTypeTwoComponent implements OnInit {

  totalPrice: number = 0;
  product: Product | any;
  orderedQuantity: number = 1;
  saucesList: any[] = [];
  orderedProductForm : FormGroup;
  isOrderFormSubmitted = false;

  constructor( 
    private productService : ProductsService,  
    public productDialogRef : DynamicDialogRef, 
    public productDialogConfig : DynamicDialogConfig,
    private fb: FormBuilder,
    private addOrderService : AddOrderService  ) {

      this.orderedProductForm = this.fb.group({
        selectedMandatory: ["", Validators.required],
        selectedOptionals: new FormArray([]),
      });

    }

  ngOnInit(): void {

    this.product = this.productDialogConfig.data.product; 
    this.totalPrice = this.product.price;
    this.saucesList = this.product.optionals;
    this.patchValues();
  }

  // convenient getter for easy access to form fields
  get f() { return this.orderedProductForm.controls; }

  setQuantity(param: number){

    if(param < 0 && this.orderedQuantity == 1){
      return;
    }
    this.orderedQuantity += param;
    this.totalPrice = this.product.price*this.orderedQuantity;
  }

  patchValues(){

    if(!this.product.optionals){
      return ;
    }
    const formArray = this.orderedProductForm.get('selectedOptionals') as FormArray;
  
    this.saucesList.forEach(sauce => {
      // generate control Group for each option and push to formArray
      formArray.push(new FormGroup({
        name: new FormControl(sauce.name),
        checked: new FormControl(sauce.checked)
      }))
    })
  }

  closeModal(product: Product){
    this.productDialogRef.close(product)
  }

  onAddToCart(){

    const orderedItem : OrderItem = {
      name: this.product.name,
      quantity: this.orderedQuantity,
      mandatory: '',
      optionals: [],
      price: this.product.price,
      image: this.product.imageBg,
      ref: this.product.ref
    }

    //We add order in in the orderCart
    this.addOrderService.setOrderItem(orderedItem);

    //we close the modal
    this.closeModal(this.product);
  }


}
