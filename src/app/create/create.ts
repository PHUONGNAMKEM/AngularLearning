import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { BlogItem, ProductItem } from '../shared/types/productItem';
import { BlogService } from '../../services/BlogService';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class CreateComponent {

  product = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.min(1)])
  })

  get name() {
    return this.product.get("name");
  }
  get price() {
    return this.product.get("price");
  }

  constructor(private blogService: BlogService, private router: Router) { }

  handleAddCart = () => {

    if (this.name?.hasError('required') || this.price?.hasError('required')) return;
    // console.log(this.name?.value);
    // console.log(this.price?.value);

    // if (this.product.invalid) {
    //   this.product.markAllAsTouched();
    //   return;
    // }

    const blogItem: BlogItem = {
      id: Math.random(),
      title: String(this.name?.value),
      body: String(this.price?.value),
      author: 'mario'
    }

    this.blogService.postBlog(blogItem).subscribe(({ data }: any) => {
      if (data.id) {
        this.router.navigate(['/']);
      }
    })

  }

}
