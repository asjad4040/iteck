import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingSectionComponent } from './ending-section.component';

describe('EndingSectionComponent', () => {
  let component: EndingSectionComponent;
  let fixture: ComponentFixture<EndingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndingSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
