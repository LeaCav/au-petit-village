import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductObelixComponent } from './product-obelix.component';

describe('ProductObelixComponent', () => {
  let component: ProductObelixComponent;
  let fixture: ComponentFixture<ProductObelixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductObelixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductObelixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
