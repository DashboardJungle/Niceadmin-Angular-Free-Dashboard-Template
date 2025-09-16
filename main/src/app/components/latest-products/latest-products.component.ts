import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/material.module';

interface stats {
  id: number;
  title: string;
  subtitle: string;
  img: string;
}

@Component({
  selector: 'app-latest-products',
  imports: [MaterialModule, TablerIconsModule, MatIconModule],
  templateUrl: './latest-products.component.html',
})
export class AppLatestProductsComponent {
  stats: stats[] = [
    {
      id: 1,
      title: 'Wireless Charging Pad',
      subtitle: '$75.00',
      img: 'assets/images/products/product-1.jpg',
    },
    {
      id: 2,
      title: 'Ergonomic Office Chair',
      subtitle: '$350.00',
      img: 'assets/images/products/product-2.jpg',
    },
    {
      id: 3,
      title: 'Smart Home Camera',
      subtitle: '$180.00',
      img: 'assets/images/products/product-3.jpg',
    },
    {
      id: 4,
      title: 'Bluetooth Soundbar',
      subtitle: '$200.00',
      img: 'assets/images/products/product-4.jpg',
    },
  ];
}
