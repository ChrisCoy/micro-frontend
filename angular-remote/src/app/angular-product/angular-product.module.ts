import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import "zone.js";
import { AngularProductComponent } from './angular-product.component';

@NgModule({
  declarations: [AngularProductComponent],
  imports: [CommonModule, BrowserModule],
  exports: [],
  bootstrap: [AngularProductComponent],
})
export class AngularProductModule {
}

export const mount = () => {
  platformBrowserDynamic().bootstrapModule(AngularProductModule)
    .catch(err => console.error(err));
}

// Ensure the HTML file where the component should be mounted includes the correct selector
// Example: <app-angular-product></app-angular-product>