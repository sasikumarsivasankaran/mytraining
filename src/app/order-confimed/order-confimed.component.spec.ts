import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfimedComponent } from './order-confimed.component';

describe('OrderConfimedComponent', () => {
  let component: OrderConfimedComponent;
  let fixture: ComponentFixture<OrderConfimedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfimedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfimedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
