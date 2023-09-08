import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
