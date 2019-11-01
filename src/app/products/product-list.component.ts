import { Component } from '@angular/core';

export class ProductListComponent {
   pageTitle: string = "Product List";
}

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})