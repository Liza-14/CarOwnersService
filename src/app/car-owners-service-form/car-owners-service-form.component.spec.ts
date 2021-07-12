import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnersServiceFormComponent } from './car-owners-service-form.component';

describe('CarOwnersServiceFormComponent', () => {
  let component: CarOwnersServiceFormComponent;
  let fixture: ComponentFixture<CarOwnersServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOwnersServiceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnersServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
