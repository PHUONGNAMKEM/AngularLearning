import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { UpperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { FormsModule } from "@angular/forms";
import { NgClass, NgFor, NgIf } from "@angular/common";
import { ProductItem } from "../types/productItem";

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [RouterOutlet,
        FormsModule,
        CurrencyPipe,
        UpperCasePipe,
        NgFor,
        NgClass,
        NgIf,
        RouterLink
    ],
    templateUrl: './productItem.component.html',
    styleUrl: './productItem.component.css'
})
export class ProductItemComponent implements OnChanges, OnDestroy {
    @Input() products: ProductItem[] = [];

    @Output() dataEvent = new EventEmitter<number>();

    get totalPrice(): string {
        const sum = this.products.reduce((total, item) => {
            return total + item.price;
        }, 0);
        return `Total Price ${sum}`;
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes['products'].currentValue);
        console.log(changes['products'].previousValue);
    }

    handleDelete = (id: number) => {
        this.dataEvent.emit(id);
    }

    ngOnDestroy(): void {
        console.log("Component is removed");
    }

}