import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassTechComponent } from './sass-tech.component';

describe('SassTechComponent', () => {
  let component: SassTechComponent;
  let fixture: ComponentFixture<SassTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SassTechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SassTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
