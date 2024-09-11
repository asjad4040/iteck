import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('mySwiper') swiper2!: ElementRef<any>;
  ngAfterViewInit() {
    const swiperParams = {
      breakpoints: {
        100: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(this.swiper2.nativeElement, swiperParams);
    this.swiper2.nativeElement.initialize();
  }
  testinmonialsArr=[
    {
      starNo:5,
      reviewMsg:'“Best dashboard for any your store, woo or shopify. Powerful and very flexiable. Recommended!”',
      clientImg:'/assets/home-page/review-client-1.jpeg',
      clientName:'Lucas Digne',
      clientRole:'Sale Product Management at Flipkart'
    },
    {
      starNo:4,
      reviewMsg:'“Iteck provide very much features to help increase CRO so amazing.”',
      clientImg:'/assets/home-page/review-client-2.jpeg',
      clientName:'Thomas Eristen',
      clientRole:'Sale Director at Amazon Retail'
    },
    {
      starNo:3,
      reviewMsg:'“Big thank to team support of Iteck. Fast, professional and extremly friendly. This product alway update and ehance everyday.”',
      clientImg:'/assets/home-page/review-client-3.jpeg',
      clientName:'Carlos Martinelli',
      clientRole:'SEO & Marketing at Ebay Global'
    },
    {
      starNo:2,
      reviewMsg:'“Best dashboard for any your store, woo or shopify. Powerful and very flexiable. Recommended!”',
      clientImg:'/assets/home-page/review-client-4.jpeg',
      clientName:'Eduard Mendy',
      clientRole:'VP of Sale Development'
    },
  ]

  config: SwiperOptions = {
    pagination: { clickable: true },
    // Breakpoints configuration
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  };
  
}
