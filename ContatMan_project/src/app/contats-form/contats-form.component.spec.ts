import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatsFormComponent } from './contats-form.component';

describe('ContatsFormComponent', () => {
  let component: ContatsFormComponent;
  let fixture: ComponentFixture<ContatsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
