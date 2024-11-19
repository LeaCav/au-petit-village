import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAsterixComponent } from './product-asterix.component';

describe('ProductAsterixComponent', () => {
  let component: ProductAsterixComponent;
  let fixture: ComponentFixture<ProductAsterixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductAsterixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAsterixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
