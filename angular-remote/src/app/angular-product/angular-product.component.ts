import { Component, OnDestroy, OnInit } from '@angular/core';

type Product = {
  name: string;
  id: string;
  price: number;
};


@Component({
  selector: 'app-angular-product',
  templateUrl: './angular-product.component.html',
  styleUrl: './angular-product.component.scss'
})
export class AngularProductComponent implements OnInit, OnDestroy {
  cart: Product[] = [];
  count = 0;

  private cartListener = (event: CustomEvent<Product[]>) => {
    this.cart = event.detail;
  }

  ngOnInit(): void {
    window.addEventListener<any>("cart", this.cartListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener<any>("cart", this.cartListener);
  }

  addToCart() {
    const product = {
      name: "Angular Product" + this.count++,
      id: Math.random().toString(36).substr(2, 9),
      price: Math.floor(Math.random() * 100),
    };
    window.dispatchEvent(new CustomEvent("cart", { detail: [...this.cart, product] }));
  }

  clearCart() {
    window.dispatchEvent(new CustomEvent("cart", { detail: [] }));
  }
}
