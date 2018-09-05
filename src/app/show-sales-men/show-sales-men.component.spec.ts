import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSalesMenComponent } from './show-sales-men.component';

describe('ShowSalesMenComponent', () => {
  let component: ShowSalesMenComponent;
  let fixture: ComponentFixture<ShowSalesMenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSalesMenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSalesMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
