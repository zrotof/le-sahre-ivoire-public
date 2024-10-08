import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestimoniesComponent } from './home-testimonies.component';

describe('HomeTestimoniesComponent', () => {
  let component: HomeTestimoniesComponent;
  let fixture: ComponentFixture<HomeTestimoniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeTestimoniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTestimoniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
