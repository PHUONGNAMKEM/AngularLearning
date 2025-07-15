import { Component, DoCheck, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ProductItem } from '../shared/types/productItem';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { HttpClient } from '@angular/common/http';
import { filter, map, Subscription } from 'rxjs';
import { BlogService } from '../../services/BlogService';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    NgClass,
    NgIf,
    ProductItemComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  btnContent = "Click Me!";

  messageContent = "";

  isActive = true;

  isVisible = true;

  namne = false;

  getBlogApi: Subscription;

  handleClick(): void {
    this.messageContent = "Clicked me";
  }

  updateField(): void {
    console.log("Hello iFanIT");
  }

  handleDelete = (id: number) => {
    // const productIndex = this.products.findIndex(item => item.id === id);
    // if (productIndex !== -1) {
    //   this.products.splice(productIndex, 1);
    // }


    this.blogService.deleteBlog(id).subscribe(({ data }) => {
      this.products = this.products.filter(item => item.id !== id);
    })
  }

  products: ProductItem[] = [
    { id: 1, name: "MLB Chunky", price: 400000, image: "assets/images/mlb.jpg" },
    { id: 2, name: "Nike F1", price: 700000, image: "assets/images/mlb.jpg" },
    { id: 3, name: "Adidas F2", price: 800000, image: "assets/images/mlb.jpg" },
    { id: 4, name: "Air Force 1", price: 200000, image: "assets/images/mlb.jpg" },
  ]

  constructor(private blogService: BlogService) {
    console.log("Initialize Component");
    this.getBlogApi = new Subscription();
  }

  ngOnInit(): void {
    this.getBlogApi = this.blogService.getBlogs().pipe(
      map(({ data }) =>
        data.map((item: any) => {
          return {
            ...item,
            name: item.title,
            price: Number(item.body),
            image: "assets/images/mlb.jpg",
          };
        })
        // .filter(item => item.price >= 400000)
      ),
    ).subscribe(res => {
      this.products = res;
    })
  }

  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      console.log("getBlogApi unsubscribe")
    }
  }

  handleChangeVisible = () => {
    this.isVisible = false;
  }

  onKeyUp(event: KeyboardEvent) {
    console.log((event.target as HTMLInputElement).value);
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value)
  }

  bindingMessage = '';

}
