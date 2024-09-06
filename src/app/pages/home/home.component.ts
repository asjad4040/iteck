import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/home/hero-section/hero-section.component';
import { ReasonsComponent } from '../../components/home/reasons/reasons.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,ReasonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
