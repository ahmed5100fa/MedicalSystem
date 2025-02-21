import { Component, OnInit, Renderer2 } from '@angular/core';
import 'animate.css';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
    0: { items: 1 },
    200: { items: 2 },
    800: { items: 3 }
    },
    nav: true,
    };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 2000,
      });
    }
  }

}
