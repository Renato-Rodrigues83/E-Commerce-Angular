import { Component } from '@angular/core';
import { BannerCarouselComponent } from "../banner-carousel/banner-carousel.component";
import { HomeProductsComponent } from "../home-products/home-products.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.css',
    imports: [BannerCarouselComponent, HomeProductsComponent]
})
export class MenuComponent {

}
