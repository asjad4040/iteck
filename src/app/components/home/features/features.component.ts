import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  featureCardArr=[
    {
      imgUrl:'/assets/home-page/feature-img-1.png',
      title:'Store Hours and Vacation',
      para:'Ideal for businesses that are seasonal or operate between fixed hours.'
    },
    {
      imgUrl:'/assets/home-page/feature-img-2.png',
      title:'Coupon Management',
      para:'Set up irresistible deals and offers with flexible discount promo codes.'
    },
    {
      imgUrl:'/assets/home-page/feature-img-3.png',
      title:'Product Import and Export',
      para:'Import products from and export products to CSV from vendor dashboard.'
    },
    {
      imgUrl:'/assets/home-page/feature-img-4.png',
      title:'Inquiry and Support Ticket System',
      para:'Interaction with sellers help buyers to make better purchase decisions.'
    },
    {
      imgUrl:'/assets/home-page/feature-img-5.png',
      title:'Membership Subscription',
      para:'Offer membership plans for sellers, free and paid. Accept recurring fees.'
    },
    {
      imgUrl:'/assets/home-page/feature-img-6.png',
      title:'Invoice and Shipping Labels',
      para:'Order fulfillment made easy with store invoices and shipping labels.'
    },
    {
      imgUrl:'/assets/home-page/feature-img-7.png',
      title:'GEO Location and Radius Search',
      para:'Allow searching products or services near the user’s current location.'
    },
    {
      imgUrl:'/assets/home-page/feature-img-8.png',
      title:'Shipment and Delivery',
      para:'Share tracking of deliveries, notify when shipping status changes.'
    },
  ]
}
