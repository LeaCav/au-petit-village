import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./product.component";

@NgModule({
    imports: [
        CommonModule,
        ProductComponent
    ],
    exports: [ProductComponent]
})

export class ProductModule {}