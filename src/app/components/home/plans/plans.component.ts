import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  isMonthlyPlan:boolean=true;
  isYearlyPlan:boolean=false;
  togglePlan(key:string){
    if(key==='yearly'){
      this.isMonthlyPlan=false;
      this.isYearlyPlan=true;
    }else{
      this.isMonthlyPlan=true;
      this.isYearlyPlan=false;
    }
  }
}
