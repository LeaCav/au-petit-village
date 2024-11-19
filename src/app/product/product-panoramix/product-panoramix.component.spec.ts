import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPanoramixComponent } from './product-panoramix.component';

describe('ProductPanoramixComponent', () => {
  let component: ProductPanoramixComponent;
  let fixture: ComponentFixture<ProductPanoramixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPanoramixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPanoramixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
