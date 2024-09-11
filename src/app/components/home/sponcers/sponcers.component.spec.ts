import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponcersComponent } from './sponcers.component';

describe('SponcersComponent', () => {
  let component: SponcersComponent;
  let fixture: ComponentFixture<SponcersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponcersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponcersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
