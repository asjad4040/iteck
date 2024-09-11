import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCustomizeComponent } from './easy-customize.component';

describe('EasyCustomizeComponent', () => {
  let component: EasyCustomizeComponent;
  let fixture: ComponentFixture<EasyCustomizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyCustomizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
