import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/home/hero-section/hero-section.component';
import { ReasonsComponent } from '../../components/home/reasons/reasons.component';
import { PaymentGatewaysComponent } from '../../components/home/payment-gateways/payment-gateways.component';
import { EasyCustomizeComponent } from '../../components/home/easy-customize/easy-customize.component';
import { FeaturesComponent } from '../../components/home/features/features.component';
import { PlansComponent } from '../../components/home/plans/plans.component';
import { TestimonialsComponent } from '../../components/home/testimonials/testimonials.component';
import { EndingSectionComponent } from '../../components/home/ending-section/ending-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,
    ReasonsComponent,
    PaymentGatewaysComponent,
    EasyCustomizeComponent,
    FeaturesComponent,
  PlansComponent,
TestimonialsComponent,
EndingSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
