import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeProductsComponent } from './components/home-products/home-products.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, BannerCarouselComponent, HomeProductsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'e-commerce-ang';
}
